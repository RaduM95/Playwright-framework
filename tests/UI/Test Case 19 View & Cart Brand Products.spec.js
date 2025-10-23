import { test, expect } from "@playwright/test";
import { HomePage } from "../../pages/homePage";
test("Test Case 19: View & Cart Brand Products", async ({ page }) => {
  const home = new HomePage(page);

  // 1. Launch browser
  // 2. Navigate to url 'http://automationexercise.com'
  await home.gotoHome();
  // 3. Click on 'Products' button
  await page.locator('a[href="/products"]').click();
  // 4. Verify that Brands are visible on left side bar
  await expect(page.getByText("Brands")).toBeVisible();
  await expect(page.locator(".brands-name")).toBeVisible();

  // 5. Click on any brand name
  await page.locator(".brands-name a").nth(1).click();
  // 6. Verify that user is navigated to brand page and brand products are displayed
  await expect(page.getByText("Brand - H&M Products")).toBeVisible();
  // 7. On left side bar, click on any other brand link
  await page.locator(".brands-name a").first().click();
  // 8. Verify that user is navigated to that brand page and can see products
  await expect(page.getByText("Brand - Polo Products")).toBeVisible();
});
