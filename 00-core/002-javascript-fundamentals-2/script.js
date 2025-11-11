// const friends = ["Kate", "Tyler"];

// friends.push("Cody"); // add element to end
// console.log(friends);

// friends.unshift("Jacob"); // add element to start
// console.log(friends);

// friends.pop(); // remove element from end
// console.log(friends);

// friends.shift(); // remove element from start
// console.log(friends);

// console.log(friends.indexOf("Tyler")); // return index of value

// console.log(friends.includes("Tyler")); // checks if the value is in the array
// friends.pop("Tyler");

// if (friends.includes("Tyler")) {
//   console.log("Tyler is a friend!");
// } else {
//   console.log("Tyler is not a friend!");
// }

// const bills = [125, 555, 44];

// const calcTip = function (bill) {
//   if (bill > 50 && bill < 300) {
//     return bill * 0.15;
//   } else {
//     return bill * 0.2;
//   }
// };

// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

// console.log(tips);

// const aboutMe = {
//   firstName: "Tyler",
//   lastName: "Jarvis",
//   birthYear: 1996,
//   hasDriversLicense: true,
//   profession: "Software Engineer",
//   partner: "Kate",
//   pets: ["Arlo", "Indi"],
//   calculateAge: function () {
//     return (this.age = 2025 - this.birthYear);
//   },
//   prepareSummary: function () {
//     this.calculateAge();
//     return (this.summary = `${this.firstName} is a ${this.age}-year old ${
//       this.profession
//     }. He has a partner called ${this.partner} and ${
//       this.pets.length
//     } pets, and has ${this.hasDriversLicense ? "a" : "no"} drivers license.`);
//   },
// };

// aboutMe.location = "Perth";

// console.log(aboutMe);

// console.log(
//   `${aboutMe.firstName} has ${aboutMe.pets.length} pets, and the first one is ${aboutMe.pets[0]}!`
// );

// console.log(aboutMe.calculateAge(aboutMe.birthYear));
// console.log(aboutMe["calculateAge"](1996));
// aboutMe.prepareSummary();
// console.log(aboutMe.summary);

// for (let repetition = 1; repetition <= 10; repetition++) {
//   console.log(`Lifting a weight, repetition ${repetition}!`);
// }

const testArray = ["Tyler", "Kate", "Cody"];

for (let i = 0; i < testArray.length; i++) {
  console.log(testArray[i], typeof testArray[i]);
}
