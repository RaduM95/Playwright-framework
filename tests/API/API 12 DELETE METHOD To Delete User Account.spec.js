import { test, expect } from "@playwright/test";
test("API 12: DELETE METHOD To Delete User Account", async ({ request }) => {
  // API URL: https://automationexercise.com/api/deleteAccount
  // Request Method: DELETE
  const response = await request.delete(
    "https://automationexercise.com/api/deleteAccount",
    { form: { email: "tester_00@mailinator.com", password: "P@$$w0rd" } }
  );
  //expect(response.status()).toBe(200);
  const body = await response.json();
  // Request Parameters: email, password
  // Response Code: 200
  expect(body.responseCode).toBe(200);
  // Response Message: Account deleted!
  expect(body.message).toBe("Account deleted!");
});
