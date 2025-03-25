/*7. Using the prompt() function, write a script that sequentially asks the user for 
-login, 
-email, 
-and password, 
and displays a message with the entered data on the screen. For example, "Dear User, your email is usermale@gmail.com, your password is qwerty ."*/

let login=prompt("Please enter your login");
let email=prompt("Please enter your email");
let password=prompt("Please enter your password");

alert("Dear " + login + ", your email is " + email + ", your password is " + password + ".");
