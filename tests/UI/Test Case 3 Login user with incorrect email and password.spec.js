import { test, expect } from "@playwright/test";
import { HomePage } from "../../pages/homePage.js";
import { LoginPage } from "../../pages/loginPage.js";
import { readCSV } from "../../utils/csvReader.js";
import { BasePage } from "../../pages/basePage.js";
const users = readCSV("./data/users.csv");

//1. Launch browser
test("Test case 3:  Login User with incorrect email and password", async ({
  page,
}) => {
  const home = new HomePage(page);
  //2. Navigate to url 'http://automationexercise.com'
  await home.gotoHome();
  //3. Verify that home page is visible successfully
  await expect(page.locator("#slider")).toBeVisible();
  await expect(page.locator(".features_items")).toBeVisible();
  expect(page.url()).toBe("https://automationexercise.com/");
  //4. Click on 'Signup / Login' button
  await home.clickLoginLink();
  //5. Verify 'Login to your account' is visible
  await expect(page.getByText("Login to your account")).toBeVisible();
  //6. Enter incorrect email address and password
  await page
    .locator(".login-form input[type='email']")
    .fill("tester_00@mailinator.com");
  await page.locator(".login-form input[type='password']").fill("P@$$w0rd");
  //7. Click 'login' button
  await page.locator(".login-form button[type=submit]").click();
  //8. Verify error 'Your email or password is incorrect!' is visible
  await expect(
    page.getByText("Your email or password is incorrect!")
  ).toBeVisible();
});
