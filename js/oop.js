class Characters {
    #maxHealth = 500;
    #greeting 
  constructor({ name, health }) {
    this.name = name;
    this.health = health;
    this.#greeting = "Hello there";
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
}

const man = new Characters({ name: "I", health: 100 });
console.log(man);

const piter = new Characters({ health: 101, name: "Piter Parker" });
console.log(piter);

const person = new Characters({ health: 800, name: "Anton" });
console.log(person);

piter.sayHello();
man.sayHello();
man.greeting = "Hello world";
man.sayHello();

console.log(person.isMove(5, 20));
