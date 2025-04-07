function leapYear(year) {
    let leap;

    if (year % 400 === 0) {
        leap = `You chose the year ${year}, this is a leap year.`;
    } else if (year % 100 === 0) {
        leap = `You chose the year ${year}, this is not a leap year.`;
    } else if (year % 4 === 0) {
        leap = `You chose the year ${year}, this is a leap year.`;
    } else {
        leap = `You chose the year ${year}, this is not a leap year.`;
    }

    return leap;
}

console.log(leapYear(2000)); // Leap Year
console.log(leapYealdr(1900)); // Not a Leap Year
console.log(leapYear(2024)); // Leap Year
console.log(leapYear(2023)); // Not a Leap Year
