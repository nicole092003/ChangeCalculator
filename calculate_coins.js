const $ = function (id) {
    return document.getElementById(id);
}

const calculate_click = function()
{  
    const coins = new Map();
    coins.set("quarters", 25);
    coins.set("dimes", 10);
    coins.set("nickels", 5);
    coins.set("pennies", 1);

    let cents = parseInt($("cents").value);

    coins.forEach(function(value, key){
        let numberOfCoins = Math.floor(cents / value);
        $(key).value = numberOfCoins;
        cents = cents - (numberOfCoins * value);
    });
}

$("calculate").addEventListener("click", calculate_click);
