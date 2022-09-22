function checkEqual(a, b) {
  return a === b ? "Both values are equal" : "Values are different";
}
console.log(checkEqual(1, 1));

// Use multiple condition ternary operator
function checkSign(num) {
  return num > 0 ? "Positive" : num < 0 ? "Negative" : "Zero";
}
console.log(checkSign(-10));
