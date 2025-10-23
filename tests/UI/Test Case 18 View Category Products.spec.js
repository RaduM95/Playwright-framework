import { test, expect } from "@playwright/test";
import { HomePage } from "../../pages/homePage.js";

test("Test Case 18: View Category Products", async ({ page }) => {
  const home = new HomePage(page);

  // 1. Launch browser
  // 2. Navigate to url 'http://automationexercise.com'
  await home.gotoHome();
  // 3. Verify that categories are visible on left side bar
  await expect(page.getByText("Category")).toBeVisible();
  await expect(page.locator(".category-products")).toBeVisible();
  // 4. Click on 'Women' category
  await page.getByRole("link", { name: " Women" }).click();
  // 5. Click on any category link under 'Women' category, for example: Dress
  //getByRole('link', { name: 'Tops' })
  await page.locator("#Women a").first().click();
  // 6. Verify that category page is displayed and confirm text 'WOMEN - TOPS PRODUCTS'
  await expect(page.getByText("Women - Dress Products")).toBeVisible();
  // 7. On left side bar, click on any sub-category link of 'Men' category
  await page.getByRole("link", { name: " Men" }).click();
  //getByRole('link', { name: 'Jeans' })
  await page.locator("#Men a").nth(1).click();

  // 8. Verify that user is navigated to that category page
  await expect(page.getByText("Men - Jeans Products")).toBeVisible();
});
