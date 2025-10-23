import { test, expect } from "@playwright/test";
test("API 14: GET user account detail by email", async ({ request }) => {
  // API URL: https://automationexercise.com/api/getUserDetailByEmail
  // Request Method: GET
  const response = await request.get(
    "https://automationexercise.com/api/getUserDetailByEmail",
    { params: { email: "tester_00@mailinator.com" } }
  );
  expect(response.status()).toBe(200);
  // Request Parameters: email
  // Response Code: 200
  const body = await response.json();
  expect(body.user).toBeDefined();

  expect(body.user.id).toBeGreaterThan(0);
  // Response JSON: User Detail
  expect(body.user.email).toBe("tester_00@mailinator.com");
  expect(body.user.name).toBe("tester_00");
});
