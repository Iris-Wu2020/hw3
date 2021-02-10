/* Assignment 3
Exercise 4 JavaScript code*/

console.log("Wu's Output from Assignment 3 Exercise 4");

let password = prompt("Please enter your password:");
let count = 1;
while (count < 3) {
    if (password !== "secret") {
        password = prompt("The password is invalid, please try again!")
        count ++;
    }else {
        console.log(`You entered the correct password after ${count} attempt(s).`);
        break;
    }
}
if (count >= 3) {
    console.log(`Your account is locked! You falied to enter the correct password ${count} times.`)
}



    
