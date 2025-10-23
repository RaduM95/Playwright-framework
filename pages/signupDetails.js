export class SignupDetails {
  constructor(page) {
    this.page = page;
    this._genderMale = page.locator("#id_gender1");
    this._genderFemale = page.locator("#id_gender2");
    this._passwordField = page.locator("#password");
    this._firstnameField = page.locator("#first_name");
    this._lastnameField = page.locator("#last_name");
    this._address1Field = page.locator("#address1");
    this._address2Field = page.locator("#address2");
    this._countriesField = page.locator("#country");
    this._stateField = page.locator("#state");
    this._cityField = page.locator("#city");
    this._zipcodeField = page.locator("#zipcode");
    this._phonenumberField = page.locator("#mobile_number");
    this._monthSelect = page.locator("#months");
    this._daySelect = page.locator("#days");
    this._yearSelect = page.locator("#years");
    this._createButton = page.locator(".login-form button[type=submit]");
    //     this.months = [
    //       "January",
    //       "February",
    //       "March",
    //       "April",
    //       "May",
    //       "June",
    //       "July",
    //       "August",
    //       "September",
    //       "October",
    //       "November",
    //       "December",
    //     ];
    //   }

    //   getRandomYear() {
    //     return Math.floor(Math.random() * (2007 - 1900 + 1)) + 1900;
    //   }

    //   getRandomDay(month, year) {
    //     if (
    //       [
    //         "January",
    //         "March",
    //         "May",
    //         "July",
    //         "August",
    //         "October",
    //         "December",
    //       ].includes(month)
    //     ) {
    //       return Math.floor(Math.random() * 31) + 1;
    //     } else if (["April", "June", "September", "November"].includes(month)) {
    //       return Math.floor(Math.random() * 30) + 1;
    //     } else if (month === "February") {
    //       // Leap year check
    //       const isLeap = year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
    //       const maxDays = isLeap ? 29 : 28;
    //       return Math.floor(Math.random() * maxDays) + 1;
    //     }
    //   }

    //   selectRandomDate() {
    //     const monthIndex = Math.floor(Math.random() * this.months.length);
    //     const month = this.months[monthIndex];
    //     const year = this.getRandomYear();
    //     const day = this.getRandomDay(month, year);

    //     this.monthSelect.selectOption(month);
    //     this.yearSelect.selectOption(year.toString());
    //     this.daySelect.selectOption(day.toString());

    //     return { month, year, day }; // return values for assertions if needed
    //   }
    //   phoneNumber() {
    //     Math.floor(Math.random() * 1_00000000)
    //       .toString()
    //       .padStart(8, "0");
    //   }

    //   selectRandomCountry() {
    //     const countryIndex = Math.floor(Math.random() * this.countries.length);
    //     const country = this.countries[countryIndex];

    //     this.countrySelect.selectOption(country);

    //     return country;
  } // return value for assertions
  async fillSignupDetails(user) {
    await this._genderMale.click();
    await this._passwordField.fill(String(user.password));
    await this._daySelect.selectOption(String(user.day));
    await this._monthSelect.selectOption(String(user.month));
    await this._yearSelect.selectOption(String(user.year));
    await this._firstnameField.fill(String(user.firstname));
    await this._lastnameField.fill(String(user.lastname));
    await this._address1Field.fill(String(user.address1));
    await this._address2Field.fill(String(user.address2));
    await this._countriesField.selectOption(user.country);
    await this._stateField.fill(String(user.state));
    await this._cityField.fill(String(user.city));
    await this._zipcodeField.fill(String(user.zipcode));
    await this._phonenumberField.fill(String(user.phonenumber));
  }
  async createAccount() {
    await this._createButton.click();
  }
}
