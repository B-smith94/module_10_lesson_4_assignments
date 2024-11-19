/*
Assignment 2
Task 1: Create a construtor function for Account object
-properties for accountNumber, balance, and owner

Task 2: Implement methods within Account object to deposit and withdraw funds

Task 3: Create a method to calculate compound interest based on teh balance and specified interest rate
*/
// Task 1
function Account(accountNumber, balance, owner) {
    this.accountNumber = accountNumber;
    this.balance = balance;
    this.owner = owner;
}

// Task 2
Account.prototype.deposit = function(number) {
    newBalance = this.balance + number
    console.log("New balance:", newBalance);
}

Account.prototype.withdraw = function(number) {
    newBalance = this.balance - number
    console.log("New balance:", newBalance);
}

// Task 3
Account.prototype.interest = function(rate) {
    interest = this.balance*rate
    console.log("Compound Interest:", interest);
}

let account12345 = new Account(12345, 45000, "John Doe");
console.log(account12345);
account12345.withdraw(3000);
account12345.deposit(5000);
account12345.interest(0.03);