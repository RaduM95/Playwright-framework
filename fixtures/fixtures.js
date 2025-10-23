import { test as base } from "@playwright/test";
import { HomePage } from "./pages/homePage.js";
import { BasePage } from "./pages/basePage.js";
import { ContactPage } from "./pages/contactPage.js";
import { LoginPage } from "./pages/loginPage.js";
import { Payment } from "./pages/paymentPage.js";
import { SignupDetails } from "./pages/signupDetails.js";

export const test = base.extend({
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
  basePage: async ({ page }, use) => {
    await use(new BasePage(page));
  },
  contactPage: async ({ page }, use) => {
    await use(new ContactPage(page));
  },
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  paymentPage: async ({ page }, use) => {
    await use(new Payment(page));
  },
  signupDetails: async ({ page }, use) => {
    await use(new SignupDetails(page));
  },
});
export { expect } from "@playwright/test";
