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
test("Test Case 16: Place Order: Login before Checkout", async ({ page }) => {
  const home = new HomePage(page);
  const cart = new BasePage(page);
  const signup = new LoginPage(page);
  const signUpFill = new SignupDetails(page);
  const payment = new Payment(page);
  const deleteAcc = new BasePage(page);
  const loginUser = new LoginPage(page);
  // 1. Launch browser
  // 2. Navigate to url 'http://automationexercise.com'
  await home.gotoHome();
  // 3. Verify that home page is visible successfully
  await expect(page.locator("#slider")).toBeVisible();
  await expect(page.locator(".features_items")).toBeVisible();
  // 4. Click 'Signup / Login' button
  await home.clickLoginLink();
  // 5. Fill email, password and click 'Login' button
  for (const user in users) {
    await loginUser.login(user.emaillogin, user.password);
  }
  // 6. Verify 'Logged in as username' at top
  await expect(page.getByText("Logged in as")).toBeVisible();
  // 7. Add products to cart
  await page.locator(".btn.btn-default.add-to-cart").first().click();
  await page.getByRole("button", { name: "Continue Shopping" }).click();
  // 8. Click 'Cart' button
  await cart.gotoCart();
  // 9. Verify that cart page is displayed
  expect(page.url()).toBe("https://automationexercise.com/view_cart");
  await expect(page.locator("#cart_items")).toBeVisible();
  // 10. Click Proceed To Checkout
  await page.getByText("Proceed To Checkout").click();
  // 11. Verify Address Details and Review Your Order
  await expect(
    page.locator(
      "div.container div.checkout-information:nth-child(3) div.row div.col-xs-12.col-sm-6:nth-child(1) ul.address.item.box > li.address_firstname.address_lastname:nth-child(2)"
    )
  ).toHaveText("Mr. test test");
  await expect(
    page.locator(
      "div.container div.checkout-information:nth-child(3) div.row div.col-xs-12.col-sm-6:nth-child(1) ul.address.item.box > li.address_address1.address_address2:nth-child(3)"
    )
  ).toHaveText("test");

  await expect(page.locator("#address_delivery > li:nth-child(4)")).toHaveText(
    "test"
  );
  // 12. Enter description in comment text area and click 'Place Order'
  await page.locator('textarea[name="message"]').fill("test");
  await page.getByText("Place Order").click();
  // 13. Enter payment details: Name on Card, Card Number, CVC, Expiration date
  for (const pay of cards) {
    await payment.fillPayment(
      pay.nameCard,
      pay.cardnumber,
      pay.cvc,
      pay.expmonth,
      pay.expyear
    );
  }
  // 14. Click 'Pay and Confirm Order' button
  await page.evaluate(() => {
    const form = document.querySelector("#payment-form");
    form?.addEventListener("submit", (e) => e.preventDefault());
  });
  await page.locator("#submit").click();
  // 15. Verify success message 'Your order has been placed successfully!'
  await expect(page.locator("#success_message .alert")).toBeVisible();
  // 16. Click 'Delete Account' button
  await deleteAcc.deleteAccount();
  // 17. Verify 'ACCOUNT DELETED!' and click 'Continue' button
  await expect(page.getByText("Account Deleted!")).toBeVisible();
  await page.getByText("Continue").click();
});
