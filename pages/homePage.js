export class HomePage {
  constructor(page) {
    this.page = page;
    this._loginLink = page.locator('a[href="/login"]');
    this._consent = page.locator('button[aria-label="Consent"]');
  }

  async gotoHome(baseURL = "/") {
    await this.page.goto(baseURL);
    if (await this._consent.isVisible()) {
      await this._consent.click();
    }
  }

  async clickLoginLink() {
    await this._loginLink.click();
  }
  get loginLinkVisible() {
    return this._loginLink;
  }
}
