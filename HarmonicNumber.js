var prompt = require('prompt-sync')();
let num = prompt("Enter the value of n for harmonic no: ");
num = parseInt(num);
let total = 0;
for(var i = 1; i <= n; i++){
    total = total + 1/i;
}
console.log("Harmonic no for "+ num + " is: "+ total);
