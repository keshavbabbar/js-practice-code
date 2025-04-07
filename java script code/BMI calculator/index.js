function bmiCalculator(weight , height){
var bmi = weight / (Math.pow(height,2));
var result;

if(bmi < 18.5){
    result = "Your BMI is " + bmi + ", so you are underweight"
} else if (bmi >=18.5 && bmi < 24.9){
    result = "Your BMI is " + bmi + ", so you have a normal weight"
} else{
    result = "Your BMI is " + bmi + ", so you are overweight"
}
return result;
}

console.log(bmiCalculator(55,1.707))