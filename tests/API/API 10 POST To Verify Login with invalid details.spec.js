import { test, expect } from "@playwright/test";
test("API 10: POST To Verify Login with invalid details", async ({
  request,
}) => {
  // API URL: https://automationexercise.com/api/verifyLogin
  // Request Method: POST
  // Request Parameters: email, password (invalid values)
  const response = await request.post(
    "https://automationexercise.com/api/verifyLogin",
    { form: { email: "asd@ffsasx.com", password: "11100232" } }
  );
  expect(response.status()).toBe(200);
  const body = await response.json();

  // Response Code: 404
  expect(body.responseCode).toBe(404);
  // Response Message: User not found!
  expect(body.message).toBe("User not found!");
});
