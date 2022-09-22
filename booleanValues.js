function welcomeToBooleans() {
  return true;
}
// console.log(welcomeToBooleans());

// use conditional logic with If statements
function ourTrueOrFalse(isItTrue) {
  if (isItTrue) {
    return "Yes, it is true";
  }
  return "No, it is false";
}
// console.log(ourTrueOrFalse(false));

// Comparison with equality operator
function testEqual(val) {
  if (val == 15) {
    return "Equal";
  }
  return "Not Equal";
}
// console.log(testEqual(12));

// Comparison with strict equality operator
function compareStrict(a, b) {
  if (a === b) {
    return "Equal";
  }
  return "Not Equal";
}
// console.log(compareStrict(10, "10"));

// Comparison with Inequality operator
function testNotEqual(val) {
  if (val != 99) {
    return "Not Equal";
  }
  return "Equal";
}
// console.log(testNotEqual(9));

function testNotEqualStrictly(a, b) {
  if (a !== b) {
    return "Not Equal";
  }
  return "Equal";
}
// console.log(testNotEqualStrictly(10, "10"));

// Comparison with logical AND Operator
function testLogicalAND(val) {
  if (val <= 50 && val >= 25) {
    return "Yes it is true";
  }
  return "No it is false";
}
// console.log(testLogicalAND(36));

// Comparison with logical OR Operator
function testLogicalOR(val) {
  if (val < 10 || val > 20) {
    return "Outside";
  }
  return "Inside";
}
// console.log(testLogicalOR(15));

// Order Logical If else
function orderMyLogic(val) {
  if (val < 5) {
    return "Less than 5";
  } else if (val < 10) {
    return "Less than 10";
  } else {
    return "Greater than or equal to 10";
  }
}
// console.log(orderMyLogic(4));

function testSize(val) {
  if (val < 5) {
    return "Tiny";
  } else if (val < 10) {
    return "Small";
  } else if (val < 15) {
    return "Medium";
  } else if (val < 20) {
    return "Large";
  } else {
    return "Huge";
  }
}
console.log(testSize(1));
