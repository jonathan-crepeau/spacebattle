// console.log('Fear is the mind killer.');

const game = {
  
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
    this.firepower = 5;
    this.accuracy = 0.7;
  }
}

class Alien extends Ship {
  constructor(name){
    super(name);
    this.hull = Math.floor(Math.random() * (6 - 3) + 3);
    this.firepower = Math.floor(Math.random() * (4 - 2) + 2);
    this.accuracy = (Math.random() * (0.8 - 0.7) + 0.7).toFixed(2);
  }
}

const winner = new Battleship('Firefly');
const alien1 = new Alien('Alien1');
