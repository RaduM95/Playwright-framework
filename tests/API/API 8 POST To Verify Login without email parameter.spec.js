import { test, expect } from "@playwright/test";
test("API 8: POST To Verify Login without email parameter", async ({
  request,
}) => {
  // API URL: https://automationexercise.com/api/verifyLogin
  // Request Method: POST
  const response = await request.post(
    "https://automationexercise.com/api/verifyLogin",
    { form: { passowrd: "P@ssw0rd" } }
  );
  expect(response.status()).toBe(200);
  // Request Parameter: password
  // Response Code: 400
  const body = await response.json();
  expect(body.responseCode).toBe(400);
  // Response Message: Bad request, email or password parameter is missing in POST request.
  expect(body.message).toBe(
    "Bad request, email or password parameter is missing in POST request."
  );
});
