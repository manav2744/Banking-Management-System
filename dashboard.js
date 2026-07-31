// Get data from Local Storage

let customers = JSON.parse(localStorage.getItem("customers")) || [];
let history = JSON.parse(localStorage.getItem("history")) || [];

// Dashboard Cards

document.getElementById("customers").innerHTML = customers.length;

// Calculate Total Balance

let totalBalance = 0;

customers.forEach(function(customer) {
    totalBalance += Number(customer.balance);
});

document.getElementById("balance").innerHTML =
    "₹" + totalBalance.toLocaleString("en-IN");

// Calculate Deposits & Withdrawals

let totalDeposit = 0;
let totalWithdraw = 0;

history.forEach(function(transaction) {

    if (transaction.type === "Deposit") {

        totalDeposit += Number(transaction.amount);

    }

    if (transaction.type === "Withdraw") {

        totalWithdraw += Number(transaction.amount);

    }

});

document.getElementById("deposit").innerHTML =
    "₹" + totalDeposit.toLocaleString("en-IN");

document.getElementById("withdraw").innerHTML =
    "₹" + totalWithdraw.toLocaleString("en-IN");

// Show Recent Transactions

const table = document.getElementById("recentTransactions");

table.innerHTML = "";

if (history.length === 0) {

    table.innerHTML = `
    <tr>
        <td colspan="3" style="text-align:center;">
            No Transactions Yet
        </td>
    </tr>
    `;

} else {

    history.slice().reverse().forEach(function(transaction) {

        table.innerHTML += `
        <tr>
            <td>${transaction.name}</td>
            <td>${transaction.type}</td>
            <td>₹${Number(transaction.amount).toLocaleString("en-IN")}</td>
        </tr>
        `;

    });

}