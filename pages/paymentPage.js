export class Payment {
  constructor(page) {
    this.page = page;
    this._nameOnCard = page.locator('#payment-form [name="name_on_card"]');
    this._cardNumber = page.locator('#payment-form [name="card_number"]');
    this._cvcField = page.locator('#payment-form [name="cvc"]');
    this._expiryMonth = page.locator('#payment-form [name="expiry_month"]');
    this._expiryYear = page.locator('#payment-form [name="expiry_year"]');
  }
  async fillPayment(namecard, cardnumber, cvc, expmonth, expyear) {
    if (namecard) await this._nameOnCard.fill(namecard);
    if (cardnumber) await this._cardNumber.fill(cardnumber);
    if (cvc) await this._cvcField.fill(cvc);
    if (expmonth) await this._expiryMonth.fill(expmonth);
    if (expyear) await this._expiryYear.fill(expyear);
  }
}
