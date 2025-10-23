import { test, expect } from "@playwright/test";

test("API 2: POST To All Products List", async ({ request }) => {
  // API URL: https://automationexercise.com/api/productsList
  // Request Method: POST
  const response = await request.post(
    "https://automationexercise.com/api/productsList",
    { data: {} }
  );

  expect(response.status()).toBe(200);

  const body = await response.json();
  // Response Code: 405
  expect(body.responseCode).toBe(405);
  // Response Message: This request method is not supported.
  expect(body.message).toBe("This request method is not supported.");
});
