
// ASSIGNMENT 1 - functions

// // define the describeCountry function
// function describeCountry(country, population, capitalCity) {
//     const countryInformation = `${country} has ${population} million people and it's capital city is ${capitalCity}.`;
//     return countryInformation;
// }

// const australia = describeCountry('Australia', 27200000, 'Canberra'); // pass in the values and store as a variable
// console.log(australia); // call the variable

// ASSIGNMENT 2 - function declarations vs. expressions

// define the function declaration 
function percentageOfWorld1(population) {
    return population / 8000 * 100;
}

// console.log(percentageOfWorld1(1408)); // log to the console

// // define the function expression
// const percentageOfWorld2 = function (population) {
//     return population / 8000 * 100;
// }

// console.log(percentageOfWorld2(1408)); // log to the console

// ASSIGNMENT 3 - arrow functions

// // define the arrow function
// const percentageOfWorld3 = population => population / 8000 * 100;

// console.log(percentageOfWorld3(1408)); // log to the console

// ASSIGNMENT 4 - functions calling other functions

// define the function declaration
function describePopulation(country, population) {
    const percentage = percentageOfWorld1(population); // call the percentageOfWorld1 function
    return `${country} has ${population} million people, which is ${percentage}% of the world.`;
}

console.log(describePopulation('China', 1408)); // log to the console

// ASSIGNMENT 5 - introduction to arrays 

// ASSIGNMENT 6 - basic array operations (methods)

// ASSIGNMENT 7 - introduction to objects

// ASSIGNMENT 8 - dot vs. bracket notation

// ASSIGNMENT 9 - object methods

// ASSIGNMENT 10 - iteration: the for loop

// ASSIGNMENT 11 - looping arrays, breaking, and continuing

// ASSIGNMENT 12 - looping backwards and loops in loops

// ASSIGNMENT 13 - the while loop
