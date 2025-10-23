import { test, expect } from "@playwright/test";
test("API 11: POST To Create & Register User Account", async ({ request }) => {
  // API URL: https://automationexercise.com/api/createAccount
  // Request Method: POST
  const response = await request.post(
    "https://automationexercise.com/api/createAccount",
    {
      form: {
        name: "tester_01",
        email: "tester_01@mailinator.com",
        password: "P@$$w0rd",
        title: "Mr.",
        birth_date: "01",
        birth_month: "January",
        birth_year: "1971",
        firstname: "test",
        lastname: "test",
        company: "",
        address1: "test",
        address2: "",
        country: "India",
        zipcode: "123456",
        state: "test",
        city: "test",
        mobile_number: "0123456789",
      },
    }
  );
  expect(response.status()).toBe(200);
  // Request Parameters: name, email, password, title (for example: Mr, Mrs, Miss), birth_date, birth_month, birth_year, firstname, lastname, company, address1, address2, country, zipcode, state, city, mobile_number
  // Response Code: 201
  const body = await response.json();
  expect(body.responseCode).toBe(201);
  // Response Message: User created!
  expect(body.message).toBe("User created!");
});
