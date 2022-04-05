// console.log('Fear is the mind killer.');

const game = {
  alienShips: [],
  attack(player1, player2) {
    if (player1.hull > 0 && player2.hull > 0) {
      player1.attack()
      player2.attack();
    }
  }
};

class Ship {
  constructor(name){
    this.name = name;
  }
}

class Battleship extends Ship {
  constructor(name){
    super(name);
    this.hull = 20;
    this.firepower = 1;
    this.accuracy = 0.7;
  }
  attack(alienEnemy) {
    alienEnemy.hull = alienEnemy.hull - this.firepower;
    if (alienEnemy.hull <= 0) {
      game.alienShips.pop();
      return
    } else {
    alienEnemy.attack();
    return alienEnemy.hull;
    }
  }
}

class Alien extends Ship {
  constructor(name){
    super(name);
    this.hull = Math.floor(Math.random() * (6 - 3) + 3);
    this.firepower = Math.floor(Math.random() * (4 - 2) + 2);
    this.accuracy = (Math.random() * (0.8 - 0.7) + 0.7).toFixed(2);
  }
  attack(humanEnemy) {
    console.log('Alien ship is attacking!');
  }
}

const jonathan = new Battleship('Firefly');
// const alien1 = new Alien('Alien1');
// const alien2 = new Alien('Alien2');
// game.alienShips.push(alien1, alien2);

// for (let a = 0; a < 1; a++) {
//   let alienShip = new Alien('alien' + a);
//   game.alienShips.push(alienShip);
//   // console.log('New Alien!');
//   // console.log(game.alienShips[0]);
//   // jonathan.attack();
//   game.attack(jonathan, game.alienShips[0])
// }

let user = new Battleship(prompt('What is your name?'));

function playGame(human) {
  for (let a = 0; a < 2; a++) {
    game.alienShips.push(new Alien('alien' + a));
    console.log(human);
    console.log(game.alienShips[0]);
    human.attack(game.alienShips[0]);
  }
}

playGame(user);

