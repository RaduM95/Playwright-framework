import { test, expect } from "@playwright/test";
import { HomePage } from "../../pages/homePage.js";
import { LoginPage } from "../../pages/loginPage.js";

test("Test Case 25: Verify Scroll Up using 'Arrow' button and Scroll Down functionality", async ({
  page,
}) => {
  const home = new HomePage(page);

  // 1. Launch browser
  // 2. Navigate to url 'http://automationexercise.com'
  await home.gotoHome();
  // 3. Verify that home page is visible successfully
  await expect(page.locator("#slider")).toBeVisible();
  await expect(page.locator(".features_items")).toBeVisible();
  // 4. Scroll down page to bottom
  await page.locator("#footer").scrollIntoViewIfNeeded();
  // 5. Verify 'SUBSCRIPTION' is visible
  await page.getByText("Subscription").isVisible();
  // 6. Click on arrow at bottom right side to move upward
  await page.locator("#scrollUp").click();
  // 7. Verify that page is scrolled up and 'Full-Fledged practice website for Automation Engineers' text is visible on screen
  await page
    .getByRole("heading", {
      name: "Full-Fledged practice website for Automation Engineers",
    })
    .isVisible();
});
