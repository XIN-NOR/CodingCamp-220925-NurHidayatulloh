function welcomeMessage() {
    console.log("Welcome to Nur Creative's Portfolio!");
    let username = prompt("What's your name?");
    if (username) {
        alert("Hello, " + username + "! Let's view my portfolio.");
        document.getElementById("username").innerText = username;
    } else {
        alert("Hello! Let's view my portfolio.");
    }
}

console.log("Script loaded successfully.");
welcomeMessage();

function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    
    if (name === "" || email === "" || message === "") {
        alert("All fields are required!");
        return false;
    }
    alert("Thank you for your message, " + name + "!");
    return true;
}
