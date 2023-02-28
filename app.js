// this class creates players
class Ship {
  constructor(hull, firepower, accuracy) {
    this.hull = hull;
    this.firepower = firepower;
    this.accuracy = accuracy;
  }

  attack = (ship) => {
    if (Math.random() < this.accuracy) {
      ship.hull -= this.firepower;
    }
  };
}

// player 1
const uss = new Ship(20, 5, 0.7);
//  eliens
let alienShips = [];
const numAlienShips = 6;
for (let i = 1; i <= 6; i++) {
  let hull = Math.floor(Math.random() * 4) + 3;
  let firepower = Math.floor(Math.random() * 3) + 2;
  let accuracy = Math.random() * 0.2 + 0.6;
  let alienShip = new Ship(hull, firepower, accuracy);
  alienShips.push(alienShip);
}

console.log(alienShips);

// game btn

const attackAliens = () => {
  uss.attack(alienShips[0]);
  console.log(alienShips[0].hull);
};

const atackUss = () => {
  alienShips[0].attack(uss);
  console.log(uss.hull);
};

//  Math.floor(Math.random() * (6 - 3 + 1) + 3), // Alien Hull
//  Math.floor(Math.random() * (4 - 2 + 1) + 2), // Alien Firepower
// (Math.floor(Math.random() * (8 - 6 + 1) + 6) * 0.1).toPrecision(1) * 1, // Alien Accuracy

// let hull = Math.floor(Math.random() * 4) + 3;
// let firepower = Math.floor(Math.random() * 3) + 2;
//  let accuracy = Math.random() * 0.2 + 0.6;