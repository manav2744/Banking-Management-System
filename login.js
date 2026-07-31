const form = document.getElementById("loginForm");

form.addEventListener("submit", function(e){

    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    console.log("Username:", username);
    console.log("Password:", password);

    if(username === "admin" && password === "12345"){

        alert("Login Successful");
        window.location.href = "dashboard.html";

    }else{

        alert("Username entered: " + username);
        alert("Password entered: " + password);

        document.getElementById("error").innerHTML =
        "Invalid Username or Password";

    }

});