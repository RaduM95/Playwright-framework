import { test, expect } from "@playwright/test";
import { HomePage } from "../../pages/homePage";
//1. Launch browser
test("Test case 7:Verify test cases page", async ({ page }) => {
  const home = new HomePage(page);
  //2. Navigate to url 'http://automationexercise.com'
  await home.gotoHome();
  //3. Verify that home page is visible successfully
  await expect(page.locator("#slider")).toBeVisible();
  await expect(page.locator(".features_items")).toBeVisible();
  expect(page.url()).toBe("https://automationexercise.com/");
  //4. Click on 'Test Cases' button
  await page.locator("ul.nav.navbar-nav li >> text=Test Cases").click();
  //Verify user is navigated to test cases page successfully
  expect(page.url()).toBe("https://automationexercise.com/test_cases");
});
