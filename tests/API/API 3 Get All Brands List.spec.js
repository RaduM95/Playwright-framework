import { test, expect } from "@playwright/test";

test("API 3: Get All Brands List", async ({ request }) => {
  // API URL: https://automationexercise.com/api/brandsList

  // Request Method: GET
  const response = await request.get(
    "https://automationexercise.com/api/brandsList"
  );
  // Response Code: 200
  expect(response.status()).toBe(200);

  const body = await response.json();

  expect(body.responseCode).toBe(200);
  // Response JSON: All brands list
  expect(Array.isArray(body.brands)).toBeTruthy();
  expect(body.brands.length).toBeGreaterThan(0);
  const brand = body.brands[0];
  expect(brand).toHaveProperty("id");
  expect(brand).toHaveProperty("brand");
});
