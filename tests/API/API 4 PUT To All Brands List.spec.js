import { test, expect } from "@playwright/test";

test("API 4: PUT To All Brands List", async ({ request }) => {
  // API URL: https://automationexercise.com/api/brandsList
  // Request Method: PUT
  const response = await request.put(
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
