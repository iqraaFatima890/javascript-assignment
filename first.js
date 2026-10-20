alert("welcome");
console.log("hello")

//firstName & lastName 

let firstName = "Iqra";
let lastName = "Fatima";
console.log(firstName + " " + lastName);

//Arithmetic operaions

let num1 = 12;
let num2 = 2;
let num3 = 5;
console.log("Addition =", num1+ num2+ num3);
console.log("Subtraction =", num1- num2- num3);
console.log("Multiplication =", num1* num2 *num3);
console.log("Division =", num1/ num2/ num3);

//temperature
let temperature = prompt("Enter temperature");

if (temperature <= 0) {
    console.log("Freezing");
} else {
    console.log("Not freezing");
}
//age
let age = prompt("Enter your age:");

if (age <= 12) {
    console.log("Child");
} else if (age <= 19) {
    console.log("Teenager");
} else if (age <= 59) {
    console.log("Adult");
} else {
    console.log("Senior Citizen");
}
//electricity bill
let units = prompt("Enter electricity units");
let bill;

if (units <= 100) {
    bill = units * 10;
} else if (units <= 200) {
    bill = 1000 + (units - 100) * 15;
} else {
    bill = 2500 + (units - 200) * 20;
}

console.log("Bill = Rs.", bill);
//Traffic light
let color = prompt("Enter traffic light color");

if (color == "Red") {
    console.log("Stop");
}
else if (color == "Yellow") {
    console.log("Ready");
}
else if (color == "Green") {
    console.log("Go");
}
else {
    console.log("Invalid Color");
}
//Money Amount
let money = prompt("Enter Pocket Amount:");

if (money > 500) {
    console.log("You can buy a gift");
}
else {
    console.log("Save your money");
}
//Free Delivery
let amount = prompt("Enter shopping amount:");

if (amount >= 2000) {
    console.log("Free Delivery");
}
else {
    console.log("Delivery Charges Apply");
}

