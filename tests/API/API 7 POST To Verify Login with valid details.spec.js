import { test, expect } from "@playwright/test";
test("API 7: POST To Verify Login with valid details", async ({ request }) => {
  // API URL: https://automationexercise.com/api/verifyLogin
  // Request Method: POST
  const response = await request.post(
    "https://automationexercise.com/api/verifyLogin",
    { form: { email: "tester_00@mailinator.com", password: "P@$$w0rd" } }
  );
  // Request Parameters: email, password
  // Response Code: 200
  expect(response.status()).toBe(200);
  const body = await response.json();
  expect(body.responseCode).toBe(200);
  // Response Message: User exists!
  expect(body.message).toBe("User exists!");
});
