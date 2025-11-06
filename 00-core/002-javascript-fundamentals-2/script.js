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

const bills = [125, 555, 44];

const calcTip = function (bill) {
  if (bill > 50 && bill < 300) {
    return bill * 0.15;
  } else {
    return bill * 0.2;
  }
};

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
