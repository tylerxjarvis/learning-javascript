// ASSIGNMENT 1 - functions

// // define the describeCountry function
// function describeCountry(country, population, capitalCity) {
//     const countryInformation = `${country} has ${population} million people and it's capital city is ${capitalCity}.`;
//     return countryInformation;
// }

// const australia = describeCountry('Australia', 27200000, 'Canberra'); // pass in the values and store as a variable
// console.log(australia); // call the variable

// ASSIGNMENT 2 - function declarations vs. expressions

// // define the function declaration
// function percentageOfWorld1(population) {
//   return (population / 8000) * 100;
// }

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

// // define the function declaration
// function describePopulation(country, population) {
//     const percentage = percentageOfWorld1(population); // call the percentageOfWorld1 function
//     return `${country} has ${population} million people, which is ${percentage}% of the world.`;
// }

// console.log(describePopulation('China', 1408)); // log to the console

// ASSIGNMENT 5 - introduction to arrays

// // define the array
// const populations = [2200, 5800, 6400, 3700];

// // determine if the array has 4 values
// if (populations.length == 4) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// // define the array
// const percentages = [
//   percentageOfWorld1(populations[0]),
//   percentageOfWorld1(populations[1]),
//   percentageOfWorld1(populations[2]),
//   percentageOfWorld1(populations[3]),
// ];

// // log to the console
// console.log(percentages);

// ASSIGNMENT 6 - basic array operations (methods)

// // define the array
// const neighbours = ["New Zealand", "Tasmania"];
// console.log(neighbours); // log to the console)

// // add the value to the end of the array
// neighbours.push("Fiji");
// console.log(neighbours); // log to the console

// // remove the value from the end of the array
// neighbours.pop("Fiji");
// console.log(neighbours); // log to the console

// // determine if the array contains the value
// if (neighbours.includes("Germany") == false) {
//   console.log("Probably not a central european country.");
// }

// // change the value of a neighbour
// neighbours[neighbours.length - 1] = "Samoa";
// console.log(neighbours); // log to the console

// ASSIGNMENT 7 - introduction to objects

// // define the object
// const myCountry = {
//   country: "Australia",
//   capital: "Canberra",
//   language: "English",
//   population: 25,
//   neighbours: ["New Zealand"],
// };

// ASSIGNMENT 8 - dot vs. bracket notation

// log to the console
// console.log(
//   `${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, with ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`
// );

// // increase the population using dot notation
// myCountry.population += 2;
// console.log(myCountry.population);

// // decrease the population using bracket notation
// myCountry["population"] -= 2;
// console.log(myCountry.population);

// ASSIGNMENT 9 - object methods

// // define the object
// const myCountry = {
//   country: "Australia",
//   capital: "Canberra",
//   language: "English",
//   population: 25,
//   landNeighbours: [],
//   // define the methods
//   checkIsland: function () {
//     return (this.isIsland = this.landNeighbours.length === 0 ? true : false);
//   },
//   describe: function () {
//     return `${this.country} has ${this.population}-million ${this.language}-speaking people, with ${this.landNeighbours.length} land-neighbouring countries and a capital called ${this.capital}.`;
//   },
// };

// myCountry.checkIsland();
// myCountry.describe();
// console.log(myCountry.checkIsland());
// console.log(myCountry.describe());

// ASSIGNMENT 10 - iteration: the for loop

// // define the for loop
// for (let voter = 1; voter <= 50; voter++) {
//   console.log(`Voter number ${voter} is currently voting.`);
// }

// ASSIGNMENT 11 - looping arrays, breaking, and continuing

// // define the arrays
// const populations = [22, 53, 17, 14];
// const percentages = [];

// // define the loop
// for (let i = 0; i < populations.length; i++) {
//   percentages.push((populations[i] / 8000) * 100);
// }

// log to the console
// console.log(percentages);

// ASSIGNMENT 12 - looping backwards and loops in loops

// // define the array
// const listOfNeighbours = [
//   ["Canada", "Mexico"],
//   ["Spain"],
//   ["Norway", "Sweden", "Russia"],
// ];

// // log to the console
// for (let i = 0; i < listOfNeighbours.length; i++) {
//   for (let y = 0; y < listOfNeighbours[i].length; y++) {
//     console.log(`Neighbour: ${listOfNeighbours[i][y]}`);
//   }
// }

// ASSIGNMENT 13 - the while loop

// define the arrays
const populations = [22, 53, 17, 14];
const percentages = [];

// define the while loop
let i = 0;
while (i < populations.length) {
  percentages.push((populations[i] / 8000) * 100);
  i++;
}

// log to the console
console.log(percentages);
