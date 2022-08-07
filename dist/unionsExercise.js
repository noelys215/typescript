"use strict";
// **********************************************
// ******************* PART 1 *******************
// **********************************************
// Create a variable called highScore that can be a number OR a boolean
const highScore = 0;
// **********************************************
// ******************* PART 2 *******************
// **********************************************
// create an array called stuff
const stuff = [];
// Create an array called colors that can hold a mixture of RGB and HSL color types
const colors = [];
// **********************************************
// ******************* PART 6 *******************
// **********************************************
// Write a function called greet that accepts a single string OR an array of strings
// It should print "Hello, <name>" for that single person OR greet each person in the array with the same format
const greet = (name) => {
    if (typeof name === 'string') {
        console.log(`'Hello ${name}`);
    }
    else {
        name.forEach((name) => console.log(`Hello ${name}`));
    }
};
const names = ['Henry', 'Ava', 'Erin'];
greet(names);
