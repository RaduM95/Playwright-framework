import { test, expect } from "@playwright/test";
import { HomePage } from "../../pages/homePage";
import { BasePage } from "../../pages/basePage";
//1. Launch browser
test("Test case 8: Verify all products and product detail page", async ({
  page,
}) => {
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
  //5. Verify user is navigated to ALL PRODUCTS page successfully
  expect(page.url()).toBe("https://automationexercise.com/products");
  await expect(page.getByText("All Products")).toBeVisible();
  //6. Enter product name in search input and click search button
  await page.getByRole("textbox", { name: "Search Product" }).fill("blue top");
  await page.getByRole("button", { name: "" }).click();
  //7. Verify 'SEARCHED PRODUCTS' is visible
  await expect(
    page.getByRole("heading", { name: "Searched Products" })
  ).toBeVisible();
  //8. Verify all the products related to search are visible
  await expect(page.locator(".features_items")).toBeVisible();
  const productListSelector = ".features_items";
  const productItems = page.locator(
    `${productListSelector} .product-image-wrapper`
  );
  const count = await productItems.count();
  expect(count).toBeGreaterThan(0);
});
