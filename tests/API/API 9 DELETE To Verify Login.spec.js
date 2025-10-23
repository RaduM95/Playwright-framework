import { test, expect } from "@playwright/test";

test("API 9: DELETE To Verify Login", async ({ request }) => {
  // API URL: https://automationexercise.com/api/verifyLogin
  const response = await request.delete(
    "https://automationexercise.com/api/verifyLogin"
  );

  // Request Method: DELETE
  // Response Code: 405
  const body = await response.json();
  expect(body.responseCode).toBe(405);
  // Response Message: This request method is not supported.
  expect(body.message).toBe("This request method is not supported.");
});
