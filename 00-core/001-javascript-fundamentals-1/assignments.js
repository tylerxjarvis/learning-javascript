// ASSIGNMENT 1 - values & variables

let country = "Australia"; // define as a temporary variable
let continent = "Australia"; // define as a temporary variable
let population = 27200000; // define as a temporary variable

console.log(country); // log to the console
console.log(continent); // log to the console
console.log(population); // log to the console

// ASSIGNMENT 2 - data types

let isIsland = true; // define as a boolean
let language; // set as undefined

console.log(typeof isIsland); // log to the console
console.log(typeof language); // log to the console

// ASSIGNMENT 3 - let, const, and var

const country = "Australia"; // define as a constant
const continent = "Australia"; // define as a constant
const isIsland = true; // define as a constant
const language = "English"; // define as a constant

// ASSIGNMENT 4 - basic operators

let halfOfPopulation = population / 2; // split the population in half
console.log(halfOfPopulation++); // increase by 1 and log to the console
const finlandPopulation = 6000000; // define as a constant
console.log(population > finlandPopulation); // determine if population is greater than finlandPopulation and return a boolean
let averagePopulation = 33000000; // define as a temporary variable
console.log(averagePopulation > population); // determine if population is less than averagePopulation and return a boolean
let description =
  country +
  " is in " +
  continent +
  ", and its " +
  population +
  " people speak " +
  language +
  "."; // define the statement as a temporary variable

// ASSIGNMENT 5 - strings and template literals

let description = `${country} is in ${continent}, and its ${population} people speak ${language}.`; // define the statement as a temporary variable using template literals
console.log(description); // log to the console

// ASSIGNMENT 6 - taking decisions: if / else statements

// determine if the population is above the average
if (population > averagePopulation) {
  console.log(
    `${country}'s population is ${
      population - averagePopulation
    } above the average!`
  );
} else {
  console.log(
    `${country}'s population is ${
      averagePopulation - population
    } below the average!`
  );
}

// ASSIGNMENT 7 - type conversion and coercion

console.log("9" - "5"); // 4
console.log("19" - "13" + "17"); // 617
console.log("19" - "13" + 17); // 23
console.log("123" < 57); // false
console.log(5 + 6 + "4" + 9 - 4 - 2); // 1143

// ASSIGNMENT 8 - equality operators: == vs. ====

const numNeighbors = prompt(
  "Howm any neighbor countries does your country have?"
);

// determine if the country has any neighbors
if (Number(numNeighbors) === 1) {
  console.log("Only 1 Border!");
} else if (numNeighbors > 1) {
  console.log("More than 1 Border!");
} else {
  console.log("No Borders!");
}

// ASSIGNMENT 9 - logical operators

let desiredPopulation = 50000000; // define as a temporary variable

// determine if the country meets the criteria
if (language === "English" && population < desiredPopulation && !isIsland) {
  console.log(`You should live in ${country}!`);
} else {
  console.log(`${country} does not meet your criteria!`);
}

// ASSIGNMENT 10 - the switch statement

// determine which country has the highest number of speakers
switch (language) {
  case "Chinese":
  case "Mandarin":
    console.log("Most number of speakers!");
    break;
  case "Spanish":
    console.log("2nd most number of speakers!");
    break;
  case "English":
    console.log("3rd most number of speakers!");
    break;
  case "Hindi":
    console.log("4th most number of speakers!");
    break;
  case "Arabic":
    console.log("5th most number of speakers!");
    break;
  default:
    console.log("Not in the top 5!");
}

// ASSIGNMENT 11 - the conditional (ternary) operator

// determine if the population is greater than the averagePopulation
const higherPopulation =
  population > averagePopulation
    ? `${country}'s population is above average!`
    : `${country}'s population is below average!`; // ternary operator
console.log(higherPopulation); // log to the console
