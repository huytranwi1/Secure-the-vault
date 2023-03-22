// Step to find the combination
// 1. Determine what way to solve the combination.
// 2. since it's predetermine that it was an arithmatic, we will solve using arithmatic.
// 3. since the combination is 10-40-39. we need to determine the right arithmatic to solve the problem.

// message wont be change so it's better to use 'const' as string.
const messageNum =
  "You have received this message because you have been chosen to open an important vault";
console.log(messageNum);

//initial alert as a hint, still need to determine the arithmatic.
alert("10" + "-" + "40" + "-" + "39");

// we will use 'let' because our variable have the tendency to change.
//first is a multiplication
let numTen = 5 * 2;
console.log(numTen);

//second we use a mixture of subtraction and adition
let numForty = 80 - 60 + 20;
console.log(numForty);

// third is the same as first
let numThirtyNine = 20 + 19 - 19 + 19;
console.log(numThirtyNine);
