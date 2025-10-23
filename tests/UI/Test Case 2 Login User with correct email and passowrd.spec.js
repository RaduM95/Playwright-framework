import { test, expect } from "@playwright/test";
import { HomePage } from "../../pages/homePage.js";
import { LoginPage } from "../../pages/loginPage.js";
import { readCSV } from "../../utils/csvReader.js";
import { BasePage } from "../../pages/basePage.js";
const users = readCSV("./data/users.csv");
test("Test case 2: Login user with correct email and password", async ({
  page,
}) => {
  const loginPage = new LoginPage(page);
  const home = new HomePage(page);
  const deleteAcc = new BasePage(page);

  //2. Navigate to url 'http://automationexercise.com'
  await home.gotoHome();
  //3. Verify that home page is visible successfully
  await expect(page.locator("#slider")).toBeVisible();
  await expect(page.locator(".features_items")).toBeVisible();
  expect(page.url()).toBe("https://automationexercise.com/");
  //4. Click on 'Signup / Login' button
  //5. Verify 'Login to your account' is visible
  //6. Enter correct email address and password
  //7. Click 'login' button
  await home.clickLoginLink();
  await page.getByText("Login to your account").isVisible();
  await expect(page.getByText("Login to your account")).toBeVisible();
  for (const user of users) {
    await loginPage.login(user.emaillogin, user.password);
  }
  //8. Verify that 'Logged in as username' is visible
  await expect(page.getByText("Logged in as")).toBeVisible();
  //9. Click 'Delete Account' button
  await deleteAcc.deleteAccount();
  //10. Verify that 'ACCOUNT DELETED!' is visible
  await expect(page.getByText("Account Deleted!")).toBeVisible();
});
