import {users} from "./users.js";

function createWelcomeEmail(user) {
return `
Olá, ${user.name}!
 
Seja bem-vindo(a) ao nosso sistema.
 
Seu cadastro foi realizado com o e-mail: ${user.email}
 
Atenciosamente,
Equipe de Suporte
`;
}
 
function createAccountDisabledEmail(user) {
return `
Olá, ${user.name}.
 
Informamos que sua conta vinculada ao e-mail ${user.email} foi desativada.
 
Caso tenha dúvidas, entre em contato com o suporte.
 
Atenciosamente,
Equipe de Suporte
`;
}
 
function sendEmail(to, subject, body) {
console.log("================================");
console.log("Enviando e-mail...");
console.log("Para:", to);
console.log("Assunto:", subject);
console.log("Mensagem:");
console.log(body);
console.log("================================");
}
 
function sendWelcomeEmail(user) {
const subject = "Bem-vindo ao sistema";
const body = createWelcomeEmail(user);
 
sendEmail(user.email, subject, body);
}
 
function sendAccountDisabledEmail(user) {
const subject = "Conta desativada";
const body = createAccountDisabledEmail(user);
 
sendEmail(user.email, subject, body);
}

export {createWelcomeEmail, createAccountDisabledEmail, sendEmail, sendWelcomeEmail, sendAccountDisabledEmail}