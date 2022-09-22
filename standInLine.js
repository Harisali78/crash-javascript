function nextInLine(arr, item) {
  arr.push(item);
  return arr.shift();
//   below code is to remove item from the end and add item at the start
  arr.unshift(item);
  return arr.pop();
}

var testArr = [1, 2, 3, 4, 5];
console.log("Before: ", JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: ", JSON.stringify(testArr));
