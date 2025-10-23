import { test, expect } from "@playwright/test";
import { HomePage } from "../../pages/homePage";
import { BasePage } from "../../pages/basePage";
//1. Launch browser
test("Test case 11:  Verify Subscription in Cart page", async ({ page }) => {
  const home = new HomePage(page);
  const cart = new BasePage(page);

  //2. Navigate to url 'http://automationexercise.com'
  await home.gotoHome();
  //3. Verify that home page is visible successfully
  await expect(page.locator("#slider")).toBeVisible();
  await expect(page.locator(".features_items")).toBeVisible();
  expect(page.url()).toBe("https://automationexercise.com/");
  //4. Click 'Cart' button
  await cart.gotoCart();
  //5. Scroll down to footer
  await page.locator("#footer").scrollIntoViewIfNeeded();
  //6. Verify text 'SUBSCRIPTION'
  await expect(page.getByText("Subscription")).toBeVisible();
  //7. Enter email address in input and click arrow button
  await page
    .getByRole("textbox", { name: "Your email address" })
    .fill("test_00@mailinator.com");
  await page.locator("#subscribe").click();
  //8. Verify success message 'You have been successfully subscribed!' is visible
  await expect(page.getByText("You have been successfully")).toBeVisible();
});
