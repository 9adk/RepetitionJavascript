var prompt = require('prompt-sync')();
let factInput = parseInt(prompt('Enter a number to find prime factors: '));
while(factInput % 2 == 0){
    console.log(2);
    factInput = factInput / 2;
}
for(var i = 3; i <= factInput*factInput; i = i + 2){
    while(factInput % i == 0){
        console.log(i);
        factInput = factInput / i;
    }
}
if(factInput > 2){
    console.log(factInput);
}