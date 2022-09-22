class car {
  constructor(name, model) {
    this.name = name;
    this.model = model;
  }
  greet() {
    return `Hello ${this.name} Car`;
  }
  static(a, b) {
    return a * b;
  }
}
class bike extends car {
  constructor(name, model, speed) {
    super(name, model);
    this.speed = speed;
  }
}
// car1 = new car("Audi", 2022);
// console.log(car1);
// bike1 = new bike("Honda", 125, 180);
// console.log(bike1);

class Employee {
  constructor(givenName, givenExperience, givenDivision) {
    this.name = givenName;
    this.experience = givenExperience;
    this.division = givenDivision;
  }
  slogan() {
    return `Hello This is ${this.name}, I work here`;
  }
  joiningYear() {
    return 2022 - this.experience;
  }
}
class Programmer extends Employee {
  constructor(
    givenName,
    givenExperience,
    givenDivision,
    givenLanguage,
    givenGithub
  ) {
    super(givenName, givenExperience, givenDivision);
    this.language = givenLanguage;
    this.github = givenGithub;
  }
  checkLanguage() {
    if (this.language != "JavaScript") {
      return "You have a terrible Taste man!";
    } else {
      return "Wow! Our taste matches";
    }
  }
}
Haris = new Employee("Haris", 20, "Programmer");
console.log(Haris.slogan());
Ali = new Programmer("Ali", 30, "Developer", "Python", "Harisali78");
console.log(Ali);
