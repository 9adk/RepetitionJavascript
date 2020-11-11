var prompt = require('prompt-sync')();
const HEADS = 0;
const TAILS = 1;
let headWins = 0;
let tailWins = 0;
while(true){
    let value = Math.floor(Math.random() * 10) % 2;
    if(value == HEADS){
        headWins++;
    }else{
        tailWins++;
    }

    if(headWins == 11 || tailWins == 11){
        break;
    }
}
if(headWins == 11){
    console.log("Winner is heads");
}else{
    console.log("Winner is tails")
}