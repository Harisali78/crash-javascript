var ourDog = {
  name: "Camper",
  legs: 4,
  tails: 1,
  friends: ["everythin"],
};

// Accessing object elements with dot notation
var name = ourDog.name;
var legs = ourDog.legs;
console.log(name, legs);

// Accessing object properties with bracket notation
var testObject = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water",
};
var entreeValue = testObject["an entree"];
var drink = testObject["the drink"];
console.log(entreeValue, drink);

// Accessing object properties with variables
var myObj = {
  12: "Namath",
  16: "Montana",
  19: "Unites",
};
var playerNumber = 12;
var player = myObj[playerNumber];
console.log(player);

// Updating object properties
ourDog.name = "Happy Camper";
console.log(ourDog);

// Add new properties to an object
ourDog.bark = "Bow Wow";
ourDog["nickname"] = "Puppy";
console.log(ourDog);

// Delete properties from an object
delete testObject["the drink"];
console.log(testObject);
delete testObject["an entree"];
console.log(testObject);

// Using objects for lookups
function phoneticLookup(val) {
  var result = "";
  var lookUp = {
    alpha: "Adams",
    bravo: "Boston",
    charlie: "Chicago",
    delta: "Denver",
    echo: "Easy",
    foztrot: "Frank",
  };
  result = lookUp[val];
  return result;
}
console.log(phoneticLookup("alpha"));

// Testing object for properties
var myObj = {
  gift: "pony",
  pet: "kitten",
  bed: "strength",
};

function checkObj(checkProp) {
  if (myObj.hasOwnProperty(checkProp)) {
    return myObj[checkProp];
  } else {
    return "Not Found";
  }
}
console.log(checkObj("fasfads"));

// Manipulating complex objects
var myMusic = [
  {
    artist: "Billy Joel",
    title: "Piano man",
    release_year: 1973,
    formats: ["CD", "8T", "LP"],
    gold: true,
  },
  {
    artist: "Haris",
    title: "Cereal Man",
    release_year: 2003,
    formats: ["Youtube video"],
  },
];

// Accessing Nested objects
var myStorage = {
  car: {
    inside: {
      "glove box": "maps",
      "passenger seat": "crumbs",
    },
    outside: {
      trunk: "Jack",
    },
  },
};
var gloveBoxContent = myStorage.car.inside["passenger seat"];
console.log(gloveBoxContent);
