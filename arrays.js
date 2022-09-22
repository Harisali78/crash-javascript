var ourArray = [50, 70, 90];
var ourData = ourArray[2];
// console.log(ourData);

// modify array with indexes
ourArray[2] = "hey bro";
// console.log(ourArray);

// Access multidimensional arrays with indexes
var myArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12], 13, 14];
var myData = myArray[4];
// console.log(myData);

// Manipulate arrays with push method :: Add an element at the end of an array
myArray.push([15, 16, 17]);

// console.log(myArray);

// Manipulate arrays with pop method :: Remove an element at the end of an array
myArray.pop();
// console.log(myArray);

// Manipulte arrays with shift method :: Remove an element from the start of an array
myArray.shift();
// console.log(myArray);

// Manipulate arrays with unshift method :: Add an element at the start of an array
myArray.unshift(["Haris", "hey", 15]);
// console.log(myArray);

// Shopping List
var myList = [
  ["cereal, 3"],
  ["milk", 2],
  ["bananas", 3],
  ["juice", 2],
  ["eggs", 12],
];
myList.unshift(["Oats", 50]);
console.log(myList);

// Accessing Nested Arrays
var myPlants = [
  {
    type: "Flowers",
    list: ["rose", "tulip", "dandelion"],
  },
  {
    type: "Trees",
    list: ["Fir", "Pine", "Birch"],
  },
];
var secondTree = myPlants[1].list[2];
console.log(secondTree);
