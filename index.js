const form = document.getElementById("form");
const fname = document.getElementById("first-name");
const lname = document.getElementById("last-name");
const email = document.getElementById("email");
const password = document.getElementById("password");

form.addEventListener("submit", (e) => {
    e.preventDefault();
  
    
    checkRequired([fname, lname, email, password]);
    checkLength(fname, 3, 15);
    checkLength(lname, 3, 15);
    checkLength(password, 8, 25);
    checkEmail(email);
  });