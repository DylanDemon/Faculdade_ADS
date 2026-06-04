import { isValidName, isValidEmail, isStrongPassword, isAdult, isRequired} from "./validators.js";

const users = [];

function createUser(name, email, password, age) {
if (!isValidName(name)) {
return {
success: false,
message: "Nome inválido. O nome deve ter pelo menos 3 caracteres."
};
}
 
if (!isValidEmail(email)) {
return {
success: false,
message: "E-mail inválido."
};
}
 
if (!isStrongPassword(password)) {
return {
success: false,
message: "Senha fraca. Use pelo menos 8 caracteres, uma letra maiúscula e um número."
};
}
 
if (!isAdult(age)) {
return {
success: false,
message: "Usuário deve ser maior de idade."
};
}
 
user = {
id: users.length + 1,
name: name.trim(),
email: email.trim().toLowerCase(),
password,
age,
active: true
};
 
users.push(user);
 
return {
success: true,
message: "Usuário criado com sucesso.",
user
};
}
 
function findUserByEmail(email) {
return users.find(function(user) {
return user.email === email.trim().toLowerCase();
});
}
 
function listUsers() {
return users;
}
 
function deactivateUser(email) {
const user = findUserByEmail(email);
 
if (!user) {
return {
success: false,
message: "Usuário não encontrado."
};
}
 
user.active = false;
 
return {
success: true,
message: "Usuário desativado com sucesso.",
user
};
}

export{users, createUser, findUserByEmail, listUsers, deactivateUser}