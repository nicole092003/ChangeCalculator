var $ = function (id) {
    return document.getElementById(id);
}

var calculate_click = function()
{  
    var quartersValue = 25;
    var dimesValue = 10;
    var nickelsValue = 5;
    var penniesValue = 1;

    var cents = parseInt($("cents").value);

    var quarters = Math.floor(cents / quartersValue);
    cents = cents % quartersValue;
    $("quarters").value = quarters;

    var dimes = Math.floor(cents / dimesValue);
    cents = cents % dimesValue;
    $("dimes").value = dimes;

    var nickels = Math.floor(cents / nickelsValue);
    cents = cents % nickelsValue;
    $("nickels").value = nickels;

    var pennies = Math.floor(cents / penniesValue);
    cents = cents % penniesValue;
    $("pennies").value = pennies;
     
}

$("calculate").addEventListener("click", calculate_click);
