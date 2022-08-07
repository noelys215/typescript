"use strict";
let age = 32;
age = 21;
age = '24';
age = 'true';
let coords = { x: 1, y: 34 };
coords = { lat: 36.93828, long: 49.49648 };
// Functions
function printAge(age) {
    console.log(`You are ${age} years old`);
}
function calculateTax(price, tax) {
    if (typeof price === 'string') {
        price = +price.replace('4', '');
    }
    return price * tax;
}
printAge('23');
printAge(23);
// Arrays
// const stuff: (number | string)[] = [2, 3, '2'];
// Literal Types
let mood = 'Happy';
mood = 'Sad';
// mood = 'Depressed';
