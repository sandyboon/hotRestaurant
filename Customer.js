class Customer {
  constructor(name, phone, email, id) {
    this.name = name;
    this.phone = phone;
    this.email = email;
    this.id = id;
  }
  getPhone() {
    return this.phone;
  }

  getEmail() {
    return this.email;
  }

  getName() {
    return this.name;
  }

  getId() {
    return this.id;
  }
}

module.exports = Customer;
