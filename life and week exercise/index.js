function ageTelling(age){
    var remaningYears = 90 - age;
    var Months =  remaningYears * 12;
    var Days =  remaningYears * 365;
    var Weeks = remaningYears * 52;
    console.log("you have " + Days + " days,  " + Weeks + " Weeks,  " + Months + " Months and " + remaningYears+ " years left" )
}

ageTelling(17);

 