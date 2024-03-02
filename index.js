// EXERCISE 03: JavaScript Basics Part 1

const password1 = "Password12";
const password2 = "Password12";
const username = "Laira";

function validatePassword(password1, password2) {
    let mixed = false;
    let match = false;
    let atLeast8 = false;
    let hasNumber = false;
    let hasUpper = false;
    let hasLower = false;


    if (password1.length >= 8) {
        atLeast8 = true;
    }
    else {
        return false;
    }

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

function reversePassword(password1) {
    var newPassword = "";

    for (let i = password1.length - 1; i >= 0; i--) { 
        let char = password1[i]; 

        newPassword = newPassword + char;
    }

    return newPassword;
}

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

