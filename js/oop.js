class Characters {
  static characterCount = 0;
  static allCharacters = [];

  #maxHealth = 500;
  #greeting;
  constructor({ name, health }) {
    this.name = name;
    this.health = health;
    this.#greeting = "Hello there";
    Characters.charactersCount++;
    Characters.allCharacters.push(this);
  }

  isMove(x, y) {
    console.log(`${this.name} is moving to ${x} ${y}`);
  }
  healing(healingValue) {
    this.health += healingValue;
    if (this.health > this.#maxHealth) {
      this.health = this.#maxHealth;
    }

    console.log(
      `Персонаж полікувався на ${healingValue}, к-сть здоров'я ${this.health}`,
    );
  }

  sayHello() {
    console.log(`${this.name}: ${this.#greeting}`);
  }

  set greeting(newGreeting) {
    if (newGreeting === "") {
      console.error("Фраза не може бути порожньою");
      return;
    }
    this.#greeting = newGreeting;
  }

  static getAlive() {
    return Characters.allCharacters.filter((character) => character.health > 0);
  }

  get maxHealth() {
    return this.#maxHealth;
  }

  static getDamagedHealth() {
    return Characters.allCharacters.filter(
      (character) => character.health !== character.maxHealth,
    );
  }
}

const man = new Characters({ name: "I", health: 100 });
console.log(man);

const piter = new Characters({ health: 0, name: "Piter Parker" });
console.log(piter);

const person = new Characters({ health: 800, name: "Anton" });
console.log(person);

piter.sayHello();
man.sayHello();
man.greeting = "Hello world";
man.sayHello();

person.isMove(5, 20);

console.log(Characters.charactersCount);

console.log(Characters.getAlive());
console.log(Characters.getDamagedHealth());


class mage extends Characters {
  constructor({ name, health, energy }) {
    super({ name, health });
    this.energy = energy;
  }
  magesAttack(hero) {
    if (this.energy < 50){ console.error("Low energy")
      return;
    }
    this.energy -= 50
    hero.health -= 100
    
  }
  

}


const mage = new mage({ name: "Mars", health: 500, energy: 400 });
console.log(mage)