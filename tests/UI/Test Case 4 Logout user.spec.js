import { test, expect } from "@playwright/test";
import { HomePage } from "../../pages/homePage.js";
import { LoginPage } from "../../pages/loginPage.js";
import { readCSV } from "../../utils/csvReader.js";
import { BasePage } from "../../pages/basePage.js";
const users = readCSV("./data/users.csv");
//1. Launch browser
test("Test case 4:  Logout user", async ({ page }) => {
  //2. Navigate to url 'http://automationexercise.com'
  const home = new HomePage(page);
  const loginPage = new LoginPage(page);
  //3. Verify that home page is visible successfully
  await expect(page.locator("#slider")).toBeVisible();
  await expect(page.locator(".features_items")).toBeVisible();
  expect(page.url()).toBe("https://automationexercise.com/");
  //4. Click on 'Signup / Login' button
  await home.clickLoginLink();
  //5. Verify 'Login to your account' is visible
  await expect(page.getByText("Login to your account")).toBeVisible();
  //6. Enter correct email address and password
  for (const user of users) {
    await loginPage.login(user.emaillogin, user.password);
  }
  //7. Click 'login' button
  //8.Verify that 'Logged in as username' is visible
  await expect(page.getByText("Logged in as")).toBeVisible();
  //9. Click 'Logout' button
  await page.getByText("Logout").click();
  //10. Verify that user is navigated to login page
  await expect(page.getByText("Login to your account")).toBeVisible();
});
