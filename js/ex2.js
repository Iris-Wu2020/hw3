/* Tutorial 4
Example 2 JavaScript code
*/
console.log("Wu's Output from Assignment 3 Exercise 2");

const day = prompt("What day is today? \n(Please enter three letter abbreviation of the day in lower case.)")
switch (day) {
    case "sun":
        console.log(`You entered: ${day} \nThe following day is mon`);
        break;
    case "mon":
        console.log(`You entered: ${day} \nThe following day is tue`);
        break;
    case "tue":
        console.log(`You entered: ${day} \nThe following day is wed`);
        break;
    case "wed":
        console.log(`You entered: ${day} \nThe following day is thu`);
        break;
    case "thu":
        console.log(`You entered: ${day} \nThe following day is fri`);
        break;
    case "fri":
        console.log(`You entered: ${day} \nThe following day is sat`);
        break;
    case "sat":
        console.log(`You entered: ${day} \nThe following day is sun`);
        break;
    default:
        console.log("Not a valid input!")
    
}