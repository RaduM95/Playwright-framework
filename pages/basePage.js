export class BasePage {
  constructor(page) {
    this.page = page;
    this._cart = page.getByRole("link", { name: " Cart" });
    this._delete = page.locator('a[href="/delete_account"]');
    this._product = page.locator('a[href="/products"]');
    this._contact = page.locator('a[href="/contact_us"]');
    this._subscribeInput = page.locator("#subscribe_email");
    this._subscribeSubmit = page.locator("#subscribe");
  }
  async gotoCart() {
    await this._cart.click();
  }
  async deleteAccount() {
    await this._delete.click();
  }
  async gotoProducts() {
    await this._product.click();
  }
  async contactUs() {
    await this._contact.click();
  }
  async subscribe(subscribemail) {
    await this._subscribeInput.fill(subscribemail);
    await this._subscribeSubmit.click();
  }
}
