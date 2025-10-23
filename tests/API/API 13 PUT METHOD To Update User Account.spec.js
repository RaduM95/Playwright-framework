import { test, expect } from "@playwright/test";

test("API 13: PUT METHOD To Update User Account", async ({ request }) => {
  // API URL: https://automationexercise.com/api/updateAccount
  // Request Method: PUT
  const response = await request.put(
    "https://automationexercise.com/api/updateAccount",
    {
      form: {
        name: "tester_00",
        email: "tester_00@mailinator.com",
        password: "P@$$w0rd",
        title: "Mr.",
        birth_date: "01",
        birth_month: "January",
        birth_year: "1972",
        firstname: "test1",
        lastname: "test1",
        company: "",
        address1: "test1",
        address2: "",
        country: "India",
        zipcode: "1234567",
        state: "test",
        city: "test",
        mobile_number: "01234567890",
      },
    }
  );
  expect(response.status()).toBe(200);
  const body = await response.json();

  // Request Parameters: name, email, password, title (for example: Mr, Mrs, Miss), birth_date, birth_month, birth_year, firstname, lastname, company, address1, address2, country, zipcode, state, city, mobile_number
  // Response Code: 200
  expect(body.responseCode).toBe(200);
  // Response Message: User updated!
  expect(body.message).toBe("User updated!");
});
