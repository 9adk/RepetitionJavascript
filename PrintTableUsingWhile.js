var prompt = require('prompt-sync')();
let powInput = prompt("Enter the input for power: ");
let value = 0;
var i = 0;
while(value < 256 ){
    i++;
    value = Math.pow(2,i);
    console.log("2^"+i+" = "+value);
}