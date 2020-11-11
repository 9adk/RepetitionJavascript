var prompt = require('prompt-sync')();
let n = prompt("Enter the value for n: ");
n = parseInt(n);
for(var i = 0; i <= n; i++){
    console.log("2^"+i+" = "+ Math.pow(2,i));
}
