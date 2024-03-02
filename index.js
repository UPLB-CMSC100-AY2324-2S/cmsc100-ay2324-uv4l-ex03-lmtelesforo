// EXERCISE 03: JavaScript Basics Part 1

// declaring variables
const password1 = "Password12";
const password2 = "Password12";
const username = "Laira";

// checks if password meets the requirements
function validatePassword(password1, password2) {
    let mixed = false;
    let match = false;
    let atLeast8 = false;
    let hasNumber = false;
    let hasUpper = false;
    let hasLower = false;

    // check if password length is at least 8
    if (password1.length >= 8) {
        atLeast8 = true;
    }
    else {
        return false;
    }

    // check if at least 1 number, 1 uppercase character, and 1 lowercase character
    for (let a = 0; a < password1.length; a++) {
        let i = password1.charAt(a);
        if (i === i.toUpperCase() && i !== i.toLowerCase()) {
            hasUpper = true;
        }
        if (i === i.toLowerCase() && i !== i.toUpperCase()) {
            hasLower = true;
        }
        if (/\d/.test(i)) {
            hasNumber = true;
        }
    }

    if (hasUpper == true && hasLower == true && hasNumber == true) {
        mixed = true;
    }
    else {
        return false;
    }

    // check if password matches
    if (password1 === password2) {
        match = true;
    }
    else {
        return false;
    }
    

    if (atLeast8 == true && match == true && mixed == true) {
        return true;
    }
}

// reverses the password string
function reversePassword(password1) {
    var newPassword = "";

    for (let i = password1.length - 1; i >= 0; i--) { // start from last index  
        let char = password1[i]; 

        newPassword = newPassword + char;
    }

    return newPassword;
}

// stores the username and password to the object
function userObject(username, password1, password2) {
    if (validatePassword(password1, password2) == true) {
        var newPass = reversePassword(password1, password2);
    }
    else {
        console.log("Invalid password.");
        var newPass = password1;
    }
    const user = {
        name: username, 
        actual_password: password1,
        new_password: newPass
    }
    return user;
}

// function call
var userInfo = userObject(username, password1, password2);
// checks if the created object is to be printed
if (validatePassword(password1, password2) == true) {
    console.log(userInfo);
}
