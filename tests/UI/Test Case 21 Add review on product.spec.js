import { test, expect } from "@playwright/test";
import { HomePage } from "../../pages/homePage.js";
import { LoginPage } from "../../pages/loginPage.js";
import { BasePage } from "../../pages/basePage.js";
import { readCSV } from "../../utils/csvReader.js";
const users = readCSV("./data/users.csv");
test("Test Case 21: Add review on product", async ({ page }) => {
  const home = new HomePage(page);
  const loginUser = new LoginPage(page);
  const product = new BasePage(page);
  const cart = new BasePage(page);
  // 1. Launch browser
  // 2. Navigate to url 'http://automationexercise.com'
  await home.gotoHome();
  // 3. Click on 'Products' button
  await product.gotoProducts();
  // 4. Verify user is navigated to ALL PRODUCTS page successfully
  expect(page.url()).toBe("https://automationexercise.com/products");
  await expect(page.getByText("All Products")).toBeVisible();
  // 5. Click on 'View Product' button
  await page.locator(".nav.nav-pills.nav-justified > li > a").first().click();

  // 6. Verify 'Write Your Review' is visible
  await expect(
    page.getByRole("link", { name: "Write Your Review" })
  ).toBeVisible();
  // 7. Enter name, email and review
  for (const user of users) {
    await page.getByRole("textbox", { name: "Your Name" }).fill(user.username);
    await page
      .getByRole("textbox", { name: "Email Address", exact: true })
      .fill(user.emaillogin);
  }
  await page.getByRole("textbox", { name: "Add Review Here!" }).fill("test");
  // 8. Click 'Submit' button
  await page.getByRole("button", { name: "Submit" }).click();
  // 9. Verify success message 'Thank you for your review.'
  await expect(page.getByText("Thank you for your review.")).toBeVisible();
});
