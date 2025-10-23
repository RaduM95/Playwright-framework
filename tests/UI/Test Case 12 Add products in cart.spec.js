import { test, expect } from "@playwright/test";
import { HomePage } from "../../pages/homePage";
import { BasePage } from "../../pages/basePage";
//1. Launch browser
test("Test Case 12: Add Products in Cart", async ({ page }) => {
  const home = new HomePage(page);
  const product = new BasePage(page);
  //2. Navigate to url 'http://automationexercise.com'
  await home.gotoHome();
  //3. Verify that home page is visible successfully
  await expect(page.locator("#slider")).toBeVisible();
  await expect(page.locator(".features_items")).toBeVisible();
  expect(page.url()).toBe("https://automationexercise.com/");
  //4. Click on 'Products' button
  await product.gotoProducts();
  //5. Hover over first product and click 'Add to cart'

  const first = page.locator(".btn.btn-default.add-to-cart").first();
  await first.getByText("Add to cart").click();

  //6. Click 'Continue Shopping' button

  await page.getByRole("button", { name: "Continue Shopping" }).click();

  //7. Hover over second product and click 'Add to cart'
  const second = page.locator(
    "div:nth-child(4) > .product-image-wrapper > .single-products > .productinfo > .btn"
  );

  await second.getByText("Add to cart").click();

  //8. Click 'View Cart' button
  await page.getByRole("link", { name: "View Cart" }).click();
  //9. Verify both products are added to Cart
  await expect(page.locator("#product-1")).toBeVisible();
  //await expect(page.getByRole("link", { name: "Blue Top" })).toBeVisible();
  await expect(page.locator("#product-2")).toBeVisible();
  //await expect(page.getByRole("link", { name: "Men Tshirt" })).toBeVisible();
  //10. Verify their prices, quantity and total price
  await expect(page.getByText("Rs.").first()).toBeVisible();
  await expect(page.getByText("Rs.").nth(2)).toBeVisible();
  await expect(
    page.locator("#product-1").getByRole("cell", { name: "1" })
  ).toBeVisible();
  await expect(
    page.locator("#product-2").getByRole("cell", { name: "1" })
  ).toBeVisible();
  await expect(page.getByText("Rs.").nth(1)).toBeVisible();
  await expect(page.getByText("Rs.").nth(3)).toBeVisible();
});
