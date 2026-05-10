
// REGISTRATION FORM //

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const submitBtn = document.getElementById("submitBtn");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");


// NAME VALIDATION //
function validateName() {

    if(nameInput.value.trim() === "") {

        nameError.textContent = "Name cannot be empty";

        nameInput.classList.add("invalid");
        nameInput.classList.remove("valid");

        return false;

    } else {

        nameError.textContent = "";

        nameInput.classList.add("valid");
        nameInput.classList.remove("invalid");

        return true;
    }
}


// EMAIL VALIDATION //
function validateEmail() {

    const emailPattern =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailPattern.test(emailInput.value)) {

        emailError.textContent =
        "Enter a valid email address";

        emailInput.classList.add("invalid");
        emailInput.classList.remove("valid");

        return false;

    } else {

        emailError.textContent = "";

        emailInput.classList.add("valid");
        emailInput.classList.remove("invalid");

        return true;
    }
}


// PASSWORD VALIDATION //
function validatePassword() {

    if(passwordInput.value.length < 6) {

        passwordError.textContent =
        "Password must be at least 6 characters";

        passwordInput.classList.add("invalid");
        passwordInput.classList.remove("valid");

        return false;

    } else {

        passwordError.textContent = "";

        passwordInput.classList.add("valid");
        passwordInput.classList.remove("invalid");

        return true;
    }
}


//  SUBMIT BUTTON //
function checkFormValidity() {

    if(
        validateName() &&
        validateEmail() &&
        validatePassword()
    ) {

        submitBtn.disabled = false;

    } else {

        submitBtn.disabled = true;
    }
}


// VALIDATION //
nameInput.addEventListener("input", checkFormValidity);
emailInput.addEventListener("input", checkFormValidity);
passwordInput.addEventListener("input", checkFormValidity);


// SUBMIT //
document
.getElementById("registerForm")
.addEventListener("submit", function(e){

    e.preventDefault();

    alert("Form Submitted Successfully!");
});


// CHARACTER COUNTER //

const textarea = document.getElementById("message");
const counter = document.getElementById("counter");
const warning = document.getElementById("warning");

const maxLength = 200;



textarea.addEventListener("input", function(){

    let textLength = textarea.value.length;

    let remaining = maxLength - textLength;

    counter.textContent =
    `${textLength} / ${maxLength} characters`;

    
    if(textLength === maxLength){

        warning.textContent =
        "Character limit reached!";

    } else {

        warning.textContent = "";
    }

});