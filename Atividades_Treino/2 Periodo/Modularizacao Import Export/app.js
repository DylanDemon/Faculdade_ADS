import { users, createUser, deactivateUser, listUsers, findUserByEmail} from "./users.js";
import { sendWelcomeEmail, sendAccountDisabledEmail } from "./emails.js";

const result = createUser(
"Ana Silva",
"ana@email.com",
"Senha123",
25
);
 
if (result.success) {
console.log(result.message);
sendWelcomeEmail(result.user);
} else {
console.log(result.message);
}
 
const secondResult = createUser(
"João",
"joaoemail.com",
"123",
17
);
 
if (secondResult.success) {
console.log(secondResult.message);
sendWelcomeEmail(secondResult.user);
} else {
console.log(secondResult.message);
}
 
console.log("Usuários cadastrados:");
console.log(listUsers());
 
const disabledResult = deactivateUser("ana@email.com");
 
if (disabledResult.success) {
console.log(disabledResult.message);
sendAccountDisabledEmail(disabledResult.user);
} else {
console.log(disabledResult.message);
}

