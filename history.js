// Load transaction history from Local Storage
let history = JSON.parse(localStorage.getItem("history")) || [];

// Display history when page loads
displayHistory();

function displayHistory() {

    const table = document.getElementById("historyTable");

    table.innerHTML = "";

    if (history.length === 0) {

        table.innerHTML = `
            <tr>
                <td colspan="4" style="text-align:center;">
                    No Transactions Found
                </td>
            </tr>
        `;

        return;
    }

    history.forEach(function(transaction) {

        table.innerHTML += `
            <tr>
                <td>${transaction.name}</td>
                <td>${transaction.type}</td>
                <td>₹${transaction.amount}</td>
                <td>${transaction.date}</td>
            </tr>
        `;

    });

}

// Clear History
function clearHistory() {

    let answer = confirm("Are you sure you want to clear all transaction history?");

    if(answer){

        localStorage.removeItem("history");

        history = [];

        displayHistory();

    }

}