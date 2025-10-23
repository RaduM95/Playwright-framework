import { BasePage } from "./basePage.js";
import path from "node:path";
import { fileURLToPath } from "node:url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
export class ContactPage extends BasePage {
  constructor(page) {
    super(page); //inherit basepage methods
    this._nameContact = page.locator('input[name="name"]');
    this._emailContact = page.locator('input[name="email"]');
    this._subjectContact = page.locator('input[name="subject"]');
    this._messageContact = page.locator("#message");
    this._uploadContact = page.locator('input[type="file"]');
    this._submitButtonContact = page.locator('input[type="submit"]');
  }
  async gotoContactUs() {
    await this.contactUs(); //inherited from basepage
  }
  async fillFields({ name, email, subject, message }) {
    if (name) await this._nameContact.fill(name);
    if (email) await this._emailContact.fill(email);
    if (subject) await this._subjectContact.fill(subject);
    if (message) await this._messageContact.fill(message);
  }
  async submitContact() {
    await this._submitButtonContact.waitFor({ state: "visible" });
    await this._submitButtonContact.click();
  }

  async uploadFile(fileName = "empty.txt") {
    const filePath = path.join(__dirname, fileName);
    await this._uploadContact.setInputFiles(filePath);
  }
}
