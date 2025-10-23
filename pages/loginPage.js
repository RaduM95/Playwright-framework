export class LoginPage {
  constructor(page) {
    this.page = page;
    this._emailInputLogin = page.locator('input[data-qa="login-email"]');
    this._passwordInput = page.locator('input[data-qa="login-password"]');
    this._loginButton = page.locator('button[data-qa="login-button"]');
    this._nameInput = page.locator('input[data-qa="signup-name"]');
    this._emailInputSignup = page.locator('input[data-qa="signup-email"]');
    this._signupButton = page.locator('button[data-qa="signup-button"]');
  }
  async login(emaillogin, password) {
    await this._emailInputLogin.fill(emaillogin);
    await this._passwordInput.fill(password);
    await this._loginButton.click();
  }
  async signup(name, emailsignup) {
    await this._nameInput.fill(name);
    await this._emailInputSignup.fill(emailsignup);
    await this._signupButton.click();
  }
}
