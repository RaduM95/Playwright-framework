import { test, expect } from "@playwright/test";
import { HomePage } from "../../pages/homePage.js";

test("Test Case 17: Remove Products From Cart", async ({ page }) => {
  const home = new HomePage(page);
  // 1. Launch browser
  // 2. Navigate to url 'http://automationexercise.com'
  await home.gotoHome();
  // 3. Verify that home page is visible successfully
  await expect(page.locator("#slider")).toBeVisible();
  await expect(page.locator(".features_items")).toBeVisible();
  // 4. Add products to cart
  await page.locator(".btn.btn-default.add-to-cart").first().click();
  await page.getByRole("button", { name: "Continue Shopping" }).click();
  // 5. Click 'Cart' button
  await cart.gotoCart();
  // 6. Verify that cart page is displayed
  expect(page.url()).toBe("https://automationexercise.com/view_cart");
  await expect(page.locator("#cart_items")).toBeVisible();
  // 7. Click 'X' button corresponding to particular product
  await page.locator(".cart_quantity_delete").click();
  // 8. Verify that product is removed from the cart
  await expect(
    page.locator(".cart_description > h4:nth-child(1) > a:nth-child(1)")
  ).not.toBeVisible();
  //   await expect(
  //     page.locator(".cart_description > h4:nth-child(1) > a:nth-child(1)")
  //   ).toHaveCount(0);
});
