var $ = function (id) {
    return document.getElementById(id);
}

var calculate_click = function()
{ 
    var cents = parseInt($("cents").value);

    var coins = new Map();
    coins.set("100dollars", 10000);
    coins.set("50dollars", 5000);
    coins.set("20dollars", 2000);
    coins.set("10dollars", 1000);
    coins.set("5dollars", 500);
    coins.set("dollars", 100);
    coins.set("quarters", 25);
    coins.set("dimes", 10);
    coins.set("nickels", 5);
    coins.set("pennies", 1);

    coins.forEach(function(value, key){
        $(key).value = Math.floor(cents / value);
        cents = cents % value;
    });
/*
    var quarters = Math.floor(cents / coins.get("quarters"));
    cents = cents % coins.get("quarters");
    $("quarters").value = quarters;

    var dimes = Math.floor(cents / coins.get("dimes"));
    cents = cents % coins.get("dimes");
    $("dimes").value = dimes;

    var nickels = Math.floor(cents / coins.get("nickels"));
    cents = cents % coins.get("nickels");
    $("nickels").value = nickels;

    var pennies = Math.floor(cents / coins.get("pennies"));
    cents = cents % coins.get("pennies");
    $("pennies").value = pennies;
    */
}

$("calculate").addEventListener("click", calculate_click);
