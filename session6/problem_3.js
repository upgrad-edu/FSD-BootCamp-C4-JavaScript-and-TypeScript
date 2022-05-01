class BankAccount {
  constructor(bankCust, bankAcc) {
    this.customer = bankCust;
    this.account = bankAcc;
  }

  getCustomerBankAccountDetails() {
    return this.account;
  }
}

let customer = {
  firstName: "Darsh",
  lastName: "Sanghvi",
};

let account = {
  customer: customer,
  balance: 9000000000,
};

const bankAccount = new BankAccount(customer, account);
console.log(
  bankAccount.getCustomerBankAccountDetails().customer.firstName +
    " " +
    bankAccount.getCustomerBankAccountDetails().customer.lastName +
    " has $" +
    bankAccount.getCustomerBankAccountDetails().balance +
    " as account balance."
);
