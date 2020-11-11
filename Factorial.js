var prompt = require('prompt-sync')();
let factNum = prompt("Enter a number to find factorial: ");
let factorial = 1;
for(var i = 1; i <= parseInt(factNum); i++){
    factorial = factorial * i;
}
console.log("Factorial of " + factNum + " = " + factorial);