//Write a cash register app in JavaScript.

//Here is an implementation of a simple cash register app in JavaScript:

const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

let cashInDrawer = 500;
const TAX_RATE = 0.07;

function calculateTotal(price, tax = TAX_RATE) {
    return price + price * tax;
}

function processPayment(amountDue, cashReceived) {
    const change = cashReceived - amountDue;
    cashInDrawer += cashReceived;
    return change;
}

readline.question(`Enter the price of the item: `, (price) => {
    const total = calculateTotal(price);
    console.log(`The total with tax is: $${total.toFixed(2)}`);

    readline.question(`How much cash was received: `, (cashReceived) => {
        const change = processPayment(total, cashReceived);
        console.log(`The change is: $${change.toFixed(2)}`);
        console.log(`Cash in drawer: $${cashInDrawer.toFixed(2)}`);
        readline.close();
    });
});
