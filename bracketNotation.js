// Bracket notation is a way to get a character at a specific index within a String
var firstLetterOfFirstName = "";
var firstName = "Hello World";
firstLetterOfFirstName = firstName[9];
console.log(firstLetterOfFirstName);

// setup
var firstLetterOfFirstName = "";

var lastName = "Hey Bro";
firstLetterOfFirstName = lastName[5];
console.log(firstLetterOfFirstName);

// bracket notation to find last character in string
var lastCharacterInString = firstName[firstName.length - 1];
console.log(lastCharacterInString);

// bracket notation to find nth-to-last character of string

var secondToLastCharacter = lastName[lastName.length - 5];
console.log(secondToLastCharacter);
