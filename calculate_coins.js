var $ = function (id) {
    return document.getElementById(id);
}

var calculate_click = function()
{  
    var quartersValue = 25;
    var dimesValue = 10;
    var nickelsValue = 5;
    var penniesValue = 1;

    var centsString = $("cents").value;
    var cents = parseFloat(centsString);

    var quarters = parseInt(cents / quartersValue);
    cents = cents - (quarters * quartersValue);
    $("quarters").value = quarters;

    var dimes = parseInt(cents / dimesValue);
    cents = cents - (dimes * dimesValue);
    $("dimes").value = dimes;

    var nickels = parseInt(cents / nickelsValue);
    cents = cents - (nickels * nickelsValue);
    $("nickels").value = nickels;

    var pennies = parseInt(cents / penniesValue);
    cents = cents - (pennies * penniesValue);
    $("pennies").value = pennies;
     
}

$("calculate").addEventListener("click", calculate_click);
