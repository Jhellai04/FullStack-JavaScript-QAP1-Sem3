/*
    The validator package from npm is a JavaScript library for string validation. 
    It provides a set of functions to validate and sanitize strings for various common use cases, such as checking if a string is an email, URL, or credit card number, among other things.
*/

var validator = require("validator");

const email = "jelliebeth.sevilla@keyin.com";

// In this snippet, we can see that simply passing the boolean method; .isEmail() will return a true or false if an email is valid.

if (validator.isEmail(email)) {
  console.log(`${email} is a valid email`);
} else {
  console.log(`${email} is not a valid email`);
}

const url = "https://keyin.com";

// In this snippet, much like with emails, the module will simply return a boolean based on the validity of the URL.

if (validator.isURL(url)) {
  console.log(`${url} is a valid URL`);
} else {
  console.log(`${url} is not a valid URL`);
}

const goodpass = "Zoie!301607@Jhailla";
const badpass = "password123";

// Using factors like password length, character variety, and use of capitalization, the module will return a boolean whether the password is strong or not.

if (validator.isStrongPassword(goodpass)) {
  console.log(`${goodpass} is a strong password`);
} else {
  console.log(`${goodpass} is not a strong password`);
}
if (validator.isStrongPassword(badpass)) {
  console.log(`${badpass} is a strong password`);
} else {
  console.log(`${badpass} is not a strong password`);
}