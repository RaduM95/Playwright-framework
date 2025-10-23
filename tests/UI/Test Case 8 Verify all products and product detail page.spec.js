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
  //6. The products list is visible
  await expect(page.locator(".features_items")).toBeVisible();
  const productListSelector = ".features_items";
  const productItems = page.locator(
    `${productListSelector} .product-image-wrapper`
  );
  const count = await productItems.count();
  expect(count).toBeGreaterThan(0);
  //7. Click on 'View Product' of first product
  await page
    .locator(".product-image-wrapper")
    .first()
    .getByText("View Product")
    .click();
  //8. User is landed to product detail page
  expect(page.url()).toBe("https://automationexercise.com/product_details/1");
  //9. Verify that detail detail is visible: product name, category, price, availability, condition, brand
  await expect(page.locator("h2:nth-child(2)")).toBeVisible();
  await expect(page.locator("p:nth-child(3)")).toBeVisible();
  await expect(page.getByText("Rs.", { selector: "span" })).toBeVisible();
  await expect(
    page.getByText("Availability:", { selector: "p" })
  ).toBeVisible();
  await expect(page.getByText("Condition:", { selector: "p" })).toBeVisible();
  await expect(page.getByText("Brand:", { selector: "p" })).toBeVisible();
});
