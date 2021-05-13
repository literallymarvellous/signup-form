
const inputFirstName = document.getElementById('firstName');
const inputLastName = document.getElementById('lastName');
const inputEmail = document.getElementById('email');
const inputPassWord = document.getElementById('password');
const error = document.querySelectorAll('.error');
const form = document.querySelector('form');
const button = document.querySelector('button');

// inputFirstName.style.backgroundColor = 'green';
// form.style.backgroundColor = 'green';
// error[0].textContent = "First Name cannot be empty";

form.addEventListener('submit', function(event) {
    if(!inputFirstName.validity.valid) {
        firstNameError();
        event.preventDefault();
    };

    if(!inputLastName.validity.valid) {
        lastNameError();
        event.preventDefault();
    };

    if(!inputEmail.validity.valid) {
        emailError();
        event.preventDefault();
    };

    if(!inputPassWord.validity.valid) {
        passwordError();
        event.preventDefault();
    };
});

function firstNameError() {
    if (inputFirstName.validity.valueMissing) {
        inputFirstName.style.border = "2px solid var(--red)";
        inputFirstName.placeholder = '';
        error[0].textContent = "First Name cannot be empty";
    }
};

function lastNameError() {
    if (inputLastName.validity.valueMissing) {
        inputLastName.style.border = "2px solid var(--red)";
        inputLastName.placeholder = '';
        error[1].textContent = "Last Name cannot be empty";
    }
};

function emailError() {
    if (inputEmail.validity.valueMissing) {
        inputEmail.style.border = "2px solid var(--red)";
        inputEmail.placeholder = '';
        error[2].textContent = "Email cannot be empty";
    } else if(inputEmail.validity.typeMismatch) {
        inputEmail.style.border = "2px solid var(--red)";
        inputEmail.placeholder = '';
        error[2].textContent = "Entered value needs to be an email";
    }
};

function passwordError() {
    if (inputPassWord.validity.valueMissing) {
        inputPassWord.style.border = "2px solid var(--red)";
        inputPassWord.placeholder = '';
        error[3].textContent = "Password cannot be empty";
    } else if(inputPassWord.validity.patternMismatch) {
        inputPassword.style.border = "2px solid var(--red)";
        inputPassWord.placeholder = '';
        error[3].textContent = "Password must contain at least one lowercase, uppercase and a number"
    }
}


