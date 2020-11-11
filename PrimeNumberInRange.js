var prompt = require('prompt-sync')();
let low = prompt("Enter the lower value");
let high = prompt("Enter the higher value");
low = parseInt(low);
high = parseInt(high);
console.log("The prime no in between "+low + " and "+ high  +" are: ");
for( var i = low; i < high; i++){
    let flag = 0;
    for( var j = 2; j < i; j++){
        if( i % j == 0){
            flag = 1;
            break;
        }
    }
    if( i > 1 && flag == 0){
        console.log(i);
    }
}