function isRequired(value) {
return value !== undefined && value !== null && value.trim() !== "";
}
 
function isValidEmail(email) {
if (!isRequired(email)) {
return false;
}
 
return email.includes("@") && email.includes(".");
}
 
function isValidName(name) {
if (!isRequired(name)) {
return false;
}
 
return name.trim().length >= 3;
}
 
function isStrongPassword(password) {
if (!isRequired(password)) {
return false;
}
 
const hasMinimumLength = password.length >= 8;
const hasNumber = /\d/.test(password);
const hasUppercase = /[A-Z]/.test(password);
 
return hasMinimumLength && hasNumber && hasUppercase;
}
 
function isAdult(age) {
return age >= 18;
}
export{isRequired,isValidEmail,isAdult,isValidName,isStrongPassword}