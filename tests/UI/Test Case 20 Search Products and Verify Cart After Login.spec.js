import { test, expect } from "@playwright/test";
import { HomePage } from "../../pages/homePage.js";
import { LoginPage } from "../../pages/loginPage.js";
import { BasePage } from "../../pages/basePage.js";
import { basename } from "path";
test("Test Case 20: Search Products and Verify Cart After Login", async ({
  page,
}) => {
  const home = new HomePage(page);
  const loginUser = new LoginPage(page);
  const product = new BasePage(page);
  const cart = new BasePage(page);
  // 1. Launch browser
  // 2. Navigate to url 'http://automationexercise.com'
  await home.gotoHome();
  // 3. Click on 'Products' button
  await product.gotoProducts();
  // 4. Verify user is navigated to ALL PRODUCTS page successfully
  expect(page.url()).toBe("https://automationexercise.com/products");
  await expect(page.getByText("All Products")).toBeVisible();
  // 5. Enter product name in search input and click search button
  await page.getByRole("textbox", { name: "Search Product" }).fill("jeans");
  await page.getByRole("button", { name: "" }).click();
  // 6. Verify 'SEARCHED PRODUCTS' is visible
  await expect(
    page.getByRole("heading", { name: "Searched Products" })
  ).toBeVisible();
  // 7. Verify all the products related to search are visible
  await expect(page.locator(".features_items")).toBeVisible();
  const productListSelector = ".features_items";
  const productItems = page.locator(
    `${productListSelector} .product-image-wrapper`
  );
  const count = await productItems.count();
  expect(count).toBeGreaterThan(0);
  // 8. Add those products to cart
  for (let i = 0; i < count; i++) {
    const product = productItems.nth(i);

    await product.hover();

    const addToCartBtn = product
      .locator('a:has-text("Add to cart")')
      .filter({ hasText: "Add to cart" });

    await Promise.all([
      page.waitForSelector("#cartModal", { state: "visible", timeout: 5000 }),
      addToCartBtn.first().click(),
    ]);

    const continueBtn = page
      .locator("#cartModal")
      .getByText("Continue Shopping");
    await continueBtn.click();

    await page.waitForSelector("#cartModal", {
      state: "hidden",
      timeout: 5000,
    });

    await page.waitForTimeout(200);
  }
  // 9. Click 'Cart' button and verify that products are visible in cart
  await cart.gotoCart();
  const productsInCart = page.getByText("jeans");
  const countProducts = await productsInCart.count();
  expect(countProducts).toBeGreaterThan(0);
  // 10. Click 'Signup / Login' button and submit login details
  await home.clickLoginLink();
  for (const user in users) {
    await loginUser.login(user.emaillogin, user.password);
  }
  // 11. Again, go to Cart page
  await cart.gotoCart();
  // 12. Verify that those products are visible in cart after login as well
  expect(countProducts).toBeGreaterThan(0);
});
