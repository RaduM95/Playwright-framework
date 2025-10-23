import { test, expect } from "@playwright/test";
import { HomePage } from "../../pages/homePage";
import { BasePage } from "../../pages/basePage";
//1. Launch browser
test("Test Case 13: Verify Product quantity in Cart", async ({ page }) => {
  const home = new HomePage(page);
  //2. Navigate to url 'http://automationexercise.com'
  await home.gotoHome();
  //3. Verify that home page is visible successfully
  await expect(page.locator("#slider")).toBeVisible();
  await expect(page.locator(".features_items")).toBeVisible();
  expect(page.url()).toBe("https://automationexercise.com/");
  //4. Click 'View Product' for any product on home page
  await page
    .locator(".product-image-wrapper")
    .first()
    .getByText("View Product")
    .click();
  //5. Verify product detail is opened
  expect(page.url()).toBe("https://automationexercise.com/product_details/1");

  //6. Increase quantity to 4
  await page.locator("#quantity").fill("4");
  //7. Click 'Add to cart' button
  await page.getByText("Add to cart").click();
  //8. Click 'View Cart' button
  await page.getByRole("link", { name: "View Cart" }).click();
  //9. Verify that product is displayed in cart page with exact quantity
  await expect(page.locator(".disabled")).toHaveText("4");
});
