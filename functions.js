function reusableCode() {
  console.log("Heyya, World");
}
reusableCode(); // calling the function

// passing values to functions with arguments

function functionWithArgs(a, b) {
  console.log(a - b);
  console.log(a + b);
  console.log(a * b);
  console.log(a / b);
}
functionWithArgs(20, 10);

// Global Scope and functions
var myGlobal = 10;
function func1() {
  oopsGlobal = 5;
}
function func2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += "oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}
func1();
func2();

// Local scope and functions
function myLocalScope() {
  var myVar = 5;
  console.log(myVar);
}
myLocalScope();

// Global vs Local Scope in functions

var outerWear = "T-shirt";
function myOutfit() {
  var outerWear = "Sweater";
  return outerWear;
}
console.log(myOutfit());
console.log(outerWear);

// Return a value from function with Return
function minusSeven(num) {
  return num - 7;
}
console.log(minusSeven(10));
function timesFive(num) {
  return num * 5;
}
console.log(timesFive(7));

// Understanding undefined value return from a function

var sum = 0;
function addThree() {
  // sum = sum + 3; // next line code can also execute and much better
  sum += 3;
  console.log(sum);
}

function addFive() {
  sum += 5;
  console.log(sum);
}
// addThree();
// addFive();

// Assignment with a returned value
var processed = 0;
function processArgs(num) {
  return (num + 3) / 5;
}
processed = processArgs(7);
console.log(processed);