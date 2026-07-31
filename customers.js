let customers = JSON.parse(localStorage.getItem("customers")) || [];

let editIndex = -1;

displayCustomers();

const form = document.getElementById("customerForm");

form.addEventListener("submit", function(e){

    e.preventDefault();

    const name = document.getElementById("name").value;

    const account = document.getElementById("account").value;

    const balance = document.getElementById("balance").value;

    const customer = {

        name,
        account,
        balance

    };

    if(editIndex === -1){

        customers.push(customer);

        console.log(customers);

    }

    else{

        customers[editIndex] = customer;

        editIndex = -1;

    }

    saveCustomers();

    displayCustomers();

    form.reset();

});

function displayCustomers(){

    const table = document.getElementById("customerTable");

    table.innerHTML = "";

    customers.forEach(function(customer,index){

        table.innerHTML += `

        <tr>

        <td>${customer.name}</td>

        <td>${customer.account}</td>

        <td>₹${customer.balance}</td>

        <td>

        <button onclick="editCustomer(${index})">

        Edit

        </button>

        <button onclick="deleteCustomer(${index})">

        Delete

        </button>

        </td>

        </tr>

        `;

    });

}

function deleteCustomer(index){

    let answer = confirm("Delete this customer?");

    if(answer){

        customers.splice(index,1);

        saveCustomers();

        displayCustomers();

    }

}

function editCustomer(index){

    document.getElementById("name").value = customers[index].name;

    document.getElementById("account").value = customers[index].account;

    document.getElementById("balance").value = customers[index].balance;

    editIndex = index;

}

function saveCustomers(){

    localStorage.setItem(

        "customers",

        JSON.stringify(customers)

    );

}

function searchCustomer(){

    let input = document.getElementById("search").value.toLowerCase();

    let rows = document.querySelectorAll("#customerTable tr");

    rows.forEach(function(row){

        let name = row.cells[0].innerHTML.toLowerCase();

        if(name.includes(input)){

            row.style.display="";

        }

        else{

            row.style.display="none";

        }

    });

}