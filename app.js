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




const checkGameOver = () => {
  // Check if the player's hull is zero or less
  if (uss.hull <= 0) {
    console.log("Game over! The aliens have won!");
    //  Display a message 
  }

  // Check if all of the alien ships have been destroyed
  if (alienShips.length === 0) {
    console.log(" You have defeated all of the alien ships!");
    // 
  }

  // Check if the current alien ship has been destroyed
  if (alienShips[0].hull <= 0) {
    console.log("You have destroyed an alien ship!");

    
    alienShips.shift();
  }
};

const attackAliens = () => {
  uss.attack(alienShips[0]);
  console.log(alienShips[0].hull);

  checkGameOver();
};

const atackUss = () => {
  alienShips[0].attack(uss);
  console.log(uss.hull);

 
};

checkGameOver();

};












//  Math.floor(Math.random() * (6 - 3 + 1) + 3), // Alien Hull
//  Math.floor(Math.random() * (4 - 2 + 1) + 2), // Alien Firepower
// (Math.floor(Math.random() * (8 - 6 + 1) + 6) * 0.1).toPrecision(1) * 1, // Alien Accuracy

// let hull = Math.floor(Math.random() * 4) + 3;
// let firepower = Math.floor(Math.random() * 3) + 2;
//  let accuracy = Math.random() * 0.2 + 0.6;