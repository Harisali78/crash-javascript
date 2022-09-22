function randomFraction() {
  return Math.random();
}
// console.log(randomFraction());

// generate Random whole numbers
var randomNumber = Math.floor(Math.random() * 20);
function generateRandomWholeNumber() {
  //   return randomNumber;
  return Math.floor(Math.random() * 10);
}
// console.log(generateRandomWholeNumber());

// Generate random whole numbers within a range
function ourRandomRange(minNum, maxNum) {
  return Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);
}
console.log(ourRandomRange(1, 50));
