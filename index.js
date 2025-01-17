//BMI Calculator

let height = prompt("What is your height in inches?");
let weight = prompt("What is your weight in pounds?");

let cmHeight = height * 2.54;
let kWeight = weight / 2.2046;
let meterHeight = cmHeight / 100;
let bmi = kWeight / meterHeight**2;

console. log(`Your height in cm is ${cmHeight} and your weight in kilos is ${kWeight}. Also in case your were wondering
                your BMI is ${bmi}`);

