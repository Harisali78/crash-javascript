var ourArray = [];
for (var i = 0; i < 6; i++) {
  ourArray.push(i);
}
// console.log(ourArray);

// Iterate odd numbers with for loop
var myArray = [];
for (var i = 1; i < 10; i += 2) {
  // start i with 0 to print even numbers
  myArray.push(i);
}
// console.log(myArray);

// Count backwards with a for loop
var backwardArray = [];
for (var i = 11; i > 0; i -= 2) {
  backwardArray.push(i);
}
// console.log(backwardArray);

// Iterate through an array with a for loop
var newArray = [9, 10, 11, 12];
var total = 0;
for (var i = 0; i < newArray.length; i++) {
  total += newArray[i];
}
// console.log(total);

// Nesting For Loops
function addAll(arr) {
  var add = 1;
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
      add *= arr[i][j];
    }
  }
  return add;
}
var add = addAll([
  [1, 2],
  [3, 4],
  [5, 6, 7],
]);
console.log(add);
