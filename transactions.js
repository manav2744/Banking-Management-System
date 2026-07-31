// Load customer and transaction data from Local Storage
let customers = JSON.parse(localStorage.getItem("customers")) || [];
let history = JSON.parse(localStorage.getItem("history")) || [];

// Get dropdown elements
const customerSelect = document.getElementById("customerSelect");
const sender = document.getElementById("sender");
const receiver = document.getElementById("receiver");

// Display customers in all dropdowns
customers.forEach(function(customer, index) {

    customerSelect.innerHTML += `
        <option value="${index}">
            ${customer.name}
        </option>
    `;

    sender.innerHTML += `
        <option value="${index}">
            ${customer.name}
        </option>
    `;

    receiver.innerHTML += `
        <option value="${index}">
            ${customer.name}
        </option>
    `;

});

// Deposit Money
function depositMoney() {

    let index = customerSelect.value;

    let amount = Number(document.getElementById("amount").value);

    customers[index].balance =
        Number(customers[index].balance) + amount;

    history.push({

        name: customers[index].name,

        type: "Deposit",

        amount: amount,

        date: new Date().toLocaleString()

    });

    save();

    alert("Money Deposited");

}

// Withdraw Money
function withdrawMoney() {

    let index = customerSelect.value;

    let amount = Number(document.getElementById("amount").value);

    if (customers[index].balance >= amount) {

        customers[index].balance =
            Number(customers[index].balance) - amount;

        history.push({

            name: customers[index].name,

            type: "Withdraw",

            amount: amount,

            date: new Date().toLocaleString()

        });

        save();

        alert("Money Withdrawn");

    } else {

        alert("Insufficient Balance");

    }

}

// Transfer Money
function transferMoney() {

    let s = sender.value;

    let r = receiver.value;

    let amount = Number(document.getElementById("transferAmount").value);

    if (s == r) {

        alert("Cannot transfer to the same account");

        return;

    }

    if (customers[s].balance < amount) {

        alert("Insufficient Balance");

        return;

    }

    customers[s].balance =
        Number(customers[s].balance) - amount;

    customers[r].balance =
        Number(customers[r].balance) + amount;

    history.push({

        name: customers[s].name + " → " + customers[r].name,

        type: "Transfer",

        amount: amount,

        date: new Date().toLocaleString()

    });

    save();

    alert("Transfer Successful");

}

// Save Data
function save() {

    localStorage.setItem(
        "customers",
        JSON.stringify(customers)
    );

    localStorage.setItem(
        "history",
        JSON.stringify(history)
    );

}