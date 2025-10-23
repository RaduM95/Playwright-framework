import { test, expect } from "@playwright/test";
import { HomePage } from "../../pages/homePage.js";
import { BasePage } from "../../pages/basePage.js";
import { ContactPage } from "../../pages/contactPage.js";
import { LoginPage } from "../../pages/loginPage.js";
//1. Launch browser
test("Test case 6: Contact us form", async ({ page }) => {
  const home = new HomePage(page);
  const contact = new ContactPage(page);
  //2. Navigate to url 'http://automationexercise.com'
  await home.gotoHome();
  //3. Verify that home page is visible successfully
  await expect(page.locator("#slider")).toBeVisible();
  await expect(page.locator(".features_items")).toBeVisible();
  //4. Click on 'Contact Us' button
  await contact.gotoContactUs();
  //5. Verify 'GET IN TOUCH' is visible
  await expect(page.getByText("Get In Touch")).toBeVisible();
  //6. Enter name, email, subject and message
  await contact.fillFields({
    name: "tester_00",
    email: "tester_00@mailinator.com",
    subject: "Test Subject",
    message: "Lorem ipsum",
  });
  //7. Upload file
  await contact.uploadFile();
  //9. Click OK button
  page.once("dialog", (dialog) => dialog.accept());
  await page.waitForTimeout(2000);
  //8. Click 'Submit' button
  await contact.submitContact();
  await page.waitForTimeout(2000);
  //10. Verify success message 'Success! Your details have been submitted successfully.' is visible\
  await expect(page.locator(".status")).toBeVisible();
  await page.waitForTimeout(2000);
  //11. Click 'Home' button and verify that landed to home page successfully
  await home.gotoHome();
  await expect(page.locator("#slider")).toBeVisible();
  await expect(page.locator(".features_items")).toBeVisible();
  expect(page.url()).toBe("https://automationexercise.com/");
});
