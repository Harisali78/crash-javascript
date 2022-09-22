var contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "111-222-333",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "444-555-666",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "777-888-999",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "Unknown",
    likes: ["Javascript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  for (var i = 0; i < contacts.length; i++) {
    if (contacts[i].firstName === name) {
      return contacts[i][prop] || "No Such Property Found";
    }
  }
  return "No Such Contact Found";
}
console.log(lookUpProfile("Sherlock", "number"));
