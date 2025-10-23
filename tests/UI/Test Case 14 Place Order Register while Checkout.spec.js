import { test, expect } from "@playwright/test";
import { HomePage } from "../../pages/homePage.js";
import { BasePage } from "../../pages/basePage.js";
import { LoginPage } from "../../pages/loginPage.js";
import { SignupDetails } from "../../pages/signupDetails.js";
import { Payment } from "../../pages/paymentPage.js";
import { readCSV } from "../../utils/csvReader.js";
const users = readCSV("./data/users.csv");
const signupUsers = readCSV("./data/signupUsers.csv");
const cards = readCSV("./data/cards.csv");
//1. Launch browser
test("Test Case 14: Place Order: Register while Checkout", async ({ page }) => {
  const home = new HomePage(page);
  const cart = new BasePage(page);
  const signup = new LoginPage(page);
  const signUpFill = new SignupDetails(page);
  const payment = new Payment(page);
  const deleteAcc = new BasePage(page);
  //2. Navigate to url 'http://automationexercise.com'
  await home.gotoHome();
  //3. Verify that home page is visible successfully

  await expect(page.locator("#slider")).toBeVisible();
  await expect(page.locator(".features_items")).toBeVisible();
  expect(page.url()).toBe("https://automationexercise.com/");

  // 4. Add products to cart
  await page.locator(".btn.btn-default.add-to-cart").first().click();
  await page.getByRole("button", { name: "Continue Shopping" }).click();
  // 5. Click 'Cart' button
  await cart.gotoCart();
  // 6. Verify that cart page is displayed
  expect(page.url()).toBe("https://automationexercise.com/view_cart");
  await expect(page.locator("#cart_items")).toBeVisible();
  // 7. Click Proceed To Checkout
  await page.getByText("Proceed To Checkout").click();
  // 8. Click 'Register / Login' button
  await page.getByRole("link", { name: "Register / Login" }).click();
  // 9. Fill all details in Signup and create account
  for (const userSignup of users) {
    await signup.signup(userSignup.username, userSignup.emaillogin);
  }
  await expect(page.getByText("Enter Account Information")).toBeVisible();
  for (const user of signupUsers) {
    await signUpFill.fillSignupDetails(user);
  }
  await signUpFill.createAccount();
  // 10. Verify 'ACCOUNT CREATED!' and click 'Continue' button
  await expect(page.getByText("Account Created!")).toBeVisible();
  await page.getByText("Continue").click();
  // 11. Verify ' Logged in as username' at top
  await expect(page.getByText("Logged in as")).toBeVisible();
  // 12.Click 'Cart' button
  await page.getByRole("link", { name: " Cart" }).click();
  // 13. Click 'Proceed To Checkout' button
  await page.getByText("Proceed To Checkout").click();
  // 14. Verify Address Details and Review Your Order
  await expect(
    page.locator(
      "div.container div.checkout-information:nth-child(3) div.row div.col-xs-12.col-sm-6:nth-child(1) ul.address.item.box > li.address_firstname.address_lastname:nth-child(2)"
    )
  ).toHaveText("Mr. test test");
  await expect(page.locator("#address_delivery > li:nth-child(4)")).toHaveText(
    "test"
  );

  // 15. Enter description in comment text area and click 'Place Order'
  await page.locator('textarea[name="message"]').fill("test");
  await page.getByText("Place Order").click();

  // 16. Enter payment details: Name on Card, Card Number, CVC, Expiration date
  for (const pay of cards) {
    await payment.fillPayment(
      pay.nameCard,
      pay.cardnumber,
      pay.cvc,
      pay.expmonth,
      pay.expyear
    );
  }
  // 17. Click 'Pay and Confirm Order' button
  //await page.getByText("Pay and Confirm Order").click();
  await page.evaluate(() => {
    const form = document.querySelector("#payment-form");
    form?.addEventListener("submit", (e) => e.preventDefault());
  });
  await page.locator("#submit").click();
  // 18. Verify success message 'Your order has been placed successfully!'
  await expect(page.locator("#success_message .alert")).toBeVisible();
  // 19. Click 'Delete Account' button
  await deleteAcc.deleteAccount();
  // 20. Verify 'ACCOUNT DELETED!' and click 'Continue' button
  await expect(page.getByText("Account Deleted!")).toBeVisible();
  await page.getByText("Continue").click();
});
