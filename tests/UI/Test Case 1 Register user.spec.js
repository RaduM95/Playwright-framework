import { test, expect } from "@playwright/test";
import { HomePage } from "../../pages/homePage.js";
import { LoginPage } from "../../pages/loginPage.js";
import { readCSV } from "../../utils/csvReader.js";
import { BasePage } from "../../pages/basePage.js";
import { SignupDetails } from "../../pages/signupDetails.js";
const users = readCSV("./data/users.csv");
const signupUsers = readCSV("./data/signupUsers.csv");

//1. Launch browser
test("Test case 1: Register User", async ({ page }) => {
  const home = new HomePage(page);
  const signup = new LoginPage(page);
  const signupDetails = new SignupDetails(page);
  const deleteAcc = new BasePage(page);

  //2. Navigate to url 'http://automationexercise.com'
  await home.gotoHome();
  //3. Verify that home page is visible successfully
  await expect(page.locator("#slider")).toBeVisible();
  await expect(page.locator(".features_items")).toBeVisible();
  //4. Click on 'Signup / Login' button
  await home.clickLoginLink();
  //5. Verify 'New User Signup!' is visible
  await expect(page.getByText("New User Signup!")).toBeVisible();
  //6. Enter name and email address
  for (const userSignup of users) {
    await signup.signup(userSignup.username, userSignup.emaillogin);
  }
  //7. Click 'Signup' button
  //8. Verify that 'ENTER ACCOUNT INFORMATION' is visible
  await expect(page.getByText("Enter Account Information")).toBeVisible();
  //9. Fill details: Title, Name, Email, Password, Date of birth
  for (const user of signupUsers) {
    await signupDetails.fillSignupDetails(user);
  }
  //10. Select checkbox 'Sign up for our newsletter!'
  await page.locator("#newsletter").check();
  await page.locator("#optin").check();
  //12. Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number
  //13. Click 'Create Account button'
  await signupDetails.createAccount();
  //14. Verify that 'ACCOUNT CREATED!' is visible
  await expect(page.getByText("Account Created!")).toBeVisible();
  //15. Click 'Continue' button
  await page.getByText("Continue").click();
  //16. Verify that 'Logged in as username' is visible
  await expect(page.getByText("Logged in as")).toBeVisible();
  //17. Click 'Delete Account' button
  await deleteAcc.deleteAccount();
  //18. Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button
  await expect(page.getByText("Account Deleted!")).toBeVisible();
  await page.getByText("Continue").click();
});
