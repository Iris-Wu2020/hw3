/* Assignment 3
Exercise 1 JavaScript code
*/
console.log("Wu's Output from Assignment 3 Exercise 1");

const name = prompt("Enter your name:");
const units = Number(prompt("Enter your number of units:"));

console.log(`Hello ${name}`);
if ((units >= 0) && (units <= 30)) {
    console.log("Your grade standing is Freshman");
} else if ((units >= 31) && (units <= 60)) {
    console.log("Your grade standing is Sophomore");
} else if ((units >= 61) && (units <= 90)) {
    console.log("Your grade standing is Junior");
}
else {
    console.log("Your grade standing is Senior");
}
