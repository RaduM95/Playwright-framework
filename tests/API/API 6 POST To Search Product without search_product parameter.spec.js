import { test, expect } from "@playwright/test";

test("API 6: POST To Search Product without search_product parameter", async ({
  request,
}) => {
  // API URL: https://automationexercise.com/api/searchProduct
  // Request Method: POST
  const response = await request.post(
    "https://automationexercise.com/api/searchProduct"
  );
  expect(response.status()).toBe(200);
  const body = await response.json();
  // Response Code: 400
  expect(body.responseCode).toBe(400);
  // Response Message: Bad request, search_product parameter is missing in POST request.
  expect(body.message).toBe(
    "Bad request, search_product parameter is missing in POST request."
  );
});
