import { test, expect } from "@playwright/test";
import { HomePage } from "../../pages/homePage.js";
import { LoginPage } from "../../pages/loginPage.js";
import { readCSV } from "../../utils/csvReader.js";
import { BasePage } from "../../pages/basePage.js";
const users = readCSV("./data/users.csv");
//1. Launch browser
test("Test case 5: Register user with existing email and password", async ({
  page,
}) => {
  const home = new HomePage(page);
  const signup = new LoginPage(page);
  //2. Navigate to url 'http://automationexercise.com'
  await home.gotoHome();
  //3. Verify that home page is visible successfully
  await expect(page.locator("#slider")).toBeVisible();
  await expect(page.locator(".features_items")).toBeVisible();
  //4. Click on 'Signup / Login' button
  await home.clickLoginLink();
  //5. Verify 'New User Signup!' is visible
  await expect(page.getByText("New User Signup!")).toBeVisible();
  //6. Enter name and already registered email address
  await signup.signup("tester_00", "tester_00@mailinator.com");
  //7. Click 'signup' button
  //8. Verify error 'Email Address already exist!' is visible
  await expect(page.getByText("Email Address already exist!")).toBeVisible();
});
