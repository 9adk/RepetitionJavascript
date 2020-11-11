var prompt = require('prompt-sync')();
let money = 100;
let wincount = 0;
let betcount = 0;
let betMoney = 1;

while(money != 0 && money <200){
    let chance = Math.floor(Math.random() * 10) % 2;
    if(chance == 1){
        money = money + betMoney;
        wincount++;
    }else{
        money = money - betMoney;
    }
    betcount++;
}
if(money == 200){
    console.log("won with bet count of "+ betcount +" with winning count of "+wincount);
}else{
    console.log("loose");
}