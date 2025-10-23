import { test, expect } from "@playwright/test";
import { HomePage } from "../../pages/homePage";
//1. Launch browser
test("Test case 10: Verify Subscription in home page", async ({ page }) => {
  const home = new HomePage(page);
  //2. Navigate to url 'http://automationexercise.com'
  await home.gotoHome();
  //3. Verify that home page is visible successfully
  await expect(page.locator("#slider")).toBeVisible();
  await expect(page.locator(".features_items")).toBeVisible();
  expect(page.url()).toBe("https://automationexercise.com/");
  //4. Scroll down to footer
  await page.locator("#footer").scrollIntoViewIfNeeded();
  //5. Verify text 'SUBSCRIPTION'
  await expect(page.getByText("Subscription")).toBeVisible();
  //6. Enter email address in input and click arrow button
  await page
    .getByRole("textbox", { name: "Your email address" })
    .fill("test_00@mailinator.com");
  await page.locator("#subscribe").click();
  //7. Verify success message 'You have been successfully subscribed!' is visible
  await expect(page.getByText("You have been successfully")).toBeVisible();
});
