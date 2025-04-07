// function greet(name) {
//     if (!name) {
//         console.log("Hy, there")
//     }
//     else {
//         console.log(`Hello${name}!`)
//     }
// }
// greet();
// greet(' Keshav');


// function convertToFerometer(celsious){
//     return (celsious * 9/5) + 32;
// }
// console.log(convertToFerometer(29));



// function convertToCelsious(ferometer){
//     return (ferometer - 32) * 5/9;
// }
// console.log(convertToCelsious(86));



// TEMPRATURE CONVERTER
function convertToFerometer(celsious){
    return (celsious * 9/5) + 32;
}

function convertToCelsious(ferometer){
    return (ferometer - 32) * 5/9;
}

function convertToTemptature(degree,unit){
    if(unit === 'F'){
        const result = convertToFerometer(degree);
        return result + 'F'
    }
    else if (unit === 'C'){
        const result = convertToCelsious(degree);
        return result + 'C'
    }
}

console.log(convertToTemptature(86, 'C'));
console.log(convertToTemptature(25, 'F'));