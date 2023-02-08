//Write a JavaScript app that tracks the user's finances.

class Transaction {
    constructor(amount, type) {
      this.amount = amount;
      this.type = type;
    }
  }
  
  class BudgetTracker {
    constructor() {
      this.balance = 0;
      this.transactions = [];
    }
  
    deposit(amount) {
      this.balance += amount;
      this.transactions.push(new Transaction(amount, "deposit"));
    }
  
    withdraw(amount) {
      if (this.balance - amount < 0) {
        console.log("Insufficient funds");
        return;
      }
      this.balance -= amount;
      this.transactions.push(new Transaction(amount, "withdrawal"));
    }
  
    getBalance() {
      return this.balance;
    }
  
    getTransactions() {
      return this.transactions;
    }
  }
  
  const budgetTracker = new BudgetTracker();
  budgetTracker.deposit(500);
  budgetTracker.withdraw(200);
  console.log(budgetTracker.getBalance()); // 300
  console.log(budgetTracker.getTransactions());
  /*
  [
    { amount: 500, type: 'deposit' },
    { amount: 200, type: 'withdrawal' }
  ]
  */
  
  /*
  This code defines a Transaction class to store information about individual transactions, and a BudgetTracker class that keeps track of the balance and transactions. The BudgetTracker class has methods for making deposits, withdrawals, getting the balance, and getting the list of transactions.
  */
  
  //Make the above code asynchronous
  
  //Here's an example of the code made asynchronous using Promises:
  
  class Transaction {
    constructor(amount, type) {
      this.amount = amount;
      this.type = type;
    }
  }
  
  class BudgetTracker {
    constructor() {
      this.balance = 0;
      this.transactions = [];
    }
  
    deposit(amount) {
      return new Promise((resolve, reject) => {
        this.balance += amount;
        this.transactions.push(new Transaction(amount, "deposit"));
        resolve();
      });
    }
  
    withdraw(amount) {
      return new Promise((resolve, reject) => {
        if (this.balance - amount < 0) {
          reject(new Error("Insufficient funds"));
          return;
        }
        this.balance -= amount;
        this.transactions.push(new Transaction(amount, "withdrawal"));
        resolve();
      });
    }
  
    getBalance() {
      return new Promise((resolve, reject) => {
        resolve(this.balance);
      });
    }
  
    getTransactions() {
      return new Promise((resolve, reject) => {
        resolve(this.transactions);
      });
    }
  }
  
  const budgetTracker = new BudgetTracker();
  budgetTracker.deposit(500)
    .then(() => budgetTracker.withdraw(200))
    .then(() => budgetTracker.getBalance())
    .then(balance => console.log(balance)) // 300
    .catch(error => console.error(error));
  budgetTracker.getTransactions()
    .then(transactions => console.log(transactions))
  /*
  [
    { amount: 500, type: 'deposit' },
    { amount: 200, type: 'withdrawal' }
  ]
  */
  
  /*
  In this code, each method returns a Promise that resolves or rejects based on the outcome of the operation. The code that calls these methods can use the then and catch methods to handle the completion of the Promises and to handle any errors that may occur.
  */
  
  