import { test, expect } from "@playwright/test";
import { HomePage } from "../../pages/homePage.js";
import { LoginPage } from "../../pages/loginPage.js";

test.only("Test Case 22: Add to cart from Recommended items", async ({
  page,
}) => {
  const home = new HomePage(page);

  // 1. Launch browser
  // 2. Navigate to url 'http://automationexercise.com'
  await home.gotoHome();
  // 3. Scroll to bottom of page
  await page.getByText("recommended items").scrollIntoViewIfNeeded();
  //await page.locator("#footer").scrollIntoViewIfNeeded();
  // 4. Verify 'RECOMMENDED ITEMS' are visible
  await expect(page.getByText("RECOMMENDED ITEMS")).toBeVisible();
  // 5. Click on 'Add To Cart' on Recommended product
  const carouselItem = page.locator(".carousel .item").filter({
    has: page.locator("p", { hasText: "Blue Top" }), // assuming product name is in <h2>
  });

  // Make sure the carousel item is visible (scroll or slide if needed)
  await carouselItem.scrollIntoViewIfNeeded();

  // Click the 'Add to cart' button inside that specific carousel item
  await carouselItem.locator("a", { hasText: "Add to cart" }).first().click();

  // Handle the modal
  //   const continueBtn = page.locator("#cartModal").getByText("Continue Shopping");
  //   if (await continueBtn.isVisible({ timeout: 2000 })) {
  //     await continueBtn.click();
  //     await page.waitForSelector("#cartModal", { state: "hidden" });
  //   }
  // 6. Click on 'View Cart' button
  await page.getByRole("link", { name: "View Cart" }).click();
  // 7. Verify that product is displayed in cart page
  const productsInCart = page.getByText("Blue Top");
  const countProducts = await productsInCart.count();
  expect(countProducts).toBeGreaterThan(0);
});
