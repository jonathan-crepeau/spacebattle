// console.log('Fear is the mind killer.');

// class Person {
//   constructor(name){
//     this.name = name;
//     this.points = 5;
//   }
//   attack(enemy){
//     enemy.points -= 1;
//   }
// }

// let Jeremy = new Person('Jeremy');
// let Jonathan = new Person('Jonathan');

// function battle(person1, person2) {
//   while (person1.points > 0 && person2.points > 0) {
//     person1.attack(person2);
//     person2.attack(person1);
//   }
//   console.log('Battle over!');
// }



// SECTION - v2 Space Battle:

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
  attack(){
    if (Math.random() < this.accuracy) {
      console.log('[Battleship]: "Direct hit on Alien Vessel, Captain!"');
      game.alienShips[0].hull -= this.firepower
      console.log(
        `--------------------------\nBattleship Hull: ${user.hull}\nAlien Hull: ${game.alienShips[0].hull}\n--------------------------`
      );
      
    } else {
      console.log('[Battleship]: "Lasers missed the target, Captain!"');
    }
  }
}

class Alien extends Ship {
  constructor(name){
    super(name);
    this.hull = Math.floor(Math.random() * (6 - 3) + 3);
    this.firepower = Math.floor(Math.random() * (4 - 2) + 2);
    this.accuracy = (Math.random() * (0.8 - 0.6) + 0.6).toFixed(2);
  }
  attack(){
    if (Math.random() < this.accuracy) {
    console.log('[Alien]: "Direct hit on Battleship vessel, overlord!"');
    user.hull -= this.firepower;
    console.log(
      `--------------------------\nBattleship Hull: ${user.hull}\nAlien Hull: ${game.alienShips[0].hull}\n--------------------------`
    );
    } else {
      console.log('[Alien]: "Acch! -- We missed!"');
    }
  }
}

const game = {
  alienShips: [],
  playGame(humanPlayer) {
    if (humanPlayer.hull > 0 && game.alienShips.length > 0) {
      game.battle(humanPlayer, game.alienShips[0]);
    } else {
      console.log('Game over --');
    }
  },
  battle(player1, player2) {
    console.log("[======= START OF BATTLE =======]");
    console.log(`[STARTING BATTLESHIP HULL]: ${user.hull}\n[STARTING ALIEN HULL]: ${game.alienShips[0].hull}`)
    while (player1.hull > 0 && player2.hull > 0) {
      player1.attack();
      player2.attack();
    }
    console.log("[======= END OF BATTLE =======]");
    console.log(user);
    game.alienShips.splice(0, 1);
    if (game.alienShips.length > 0 && user.hull > 0) {
      let response = prompt('Do you want to attack the next ship?').toLowerCase();
      console.log(response);
      if (response == 'yes') {
        console.log("[======= Next ship! =======]");
        return game.battle(user, game.alienShips[0]);
      } else {
        console.log('Retreat!');
      }
    } else if (game.alienShips.length == 0) {
      return console.log('Winner! All alien ships exterminated!');
    } else {
      return console.log('[======= Game Over! =======]');
    }
  },
};



// SECTION - "Seed" Data for Game:
const user = new Battleship(prompt('What is your name?'));
// console.log(user);

for (let a = 0; a < 6; a++) {
  game.alienShips.push(new Alien('alien' + (a + 1)));
}
// console.log(game.alienShips);



// SECTION - Functions:
// function playGame(humanPlayer) {
//   if (humanPlayer.hull > 0 && game.alienShips.length > 0) {
//     battle(humanPlayer, game.alienShips[0]);
//   } else {
//     console.log('Game over --');
//   }
// }

// function battle(player1, player2) {
//   while (player2.hull > 0) {
//     player1.attack();
//     player2.attack();
//   }
//   console.log(user);
//   game.alienShips.splice(0, 1);
//   if (game.alienShips.length > 0 && user.hull > 0) {
//     let response = prompt('Do you want to attack the next ship?').toLowerCase();
//     console.log(response);
//     if (response == 'yes') {
//       console.log('Next ship!');
//       return battle(user, game.alienShips[0]);
//     } else {
//       console.log('Retreat!');
//     }
//   } else if (game.alienShips.length == 0) {
//     console.log('Winner! All alien ships exterminated!');
//   } else {
//     console.log('Game over!')
//   }
// }

// NOTE - Start game:
game.playGame(user);