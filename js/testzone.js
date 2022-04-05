console.log('Fear is the mind killer.');

class Person {
  constructor(name){
    this.name = name;
    this.points = 5;
  }
  attack(enemy){
    enemy.points -= 1;
  }
}

let Jeremy = new Person('Jeremy');
let Jonathan = new Person('Jonathan');

function battle(person1, person2) {
  while (person1.points > 0 && person2.points > 0) {
    person1.attack(person2);
    person2.attack(person1);
  }
  console.log('Battle over!');
}