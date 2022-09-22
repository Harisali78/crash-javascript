// var spaceShuttle = function (targetPlanet) {
//   this.targetPlanet = targetPlanet;
// };
// var zeus = new spaceShuttle("Jupiter");
// console.log(zeus);

class spaceShuttle {
  constructor(targetPlanet) {
    this.targetPlanet = targetPlanet;
  }
}
var zeus = new spaceShuttle("Saturn");
console.log(zeus);

function makeClass() {
  class Vegetables {
    constructor(name) {
      this.name = name;
    }
  }
  return Vegetables;
}
const Vegetables = makeClass();
const carrot = new Vegetables("Carrot");
console.log(carrot);
