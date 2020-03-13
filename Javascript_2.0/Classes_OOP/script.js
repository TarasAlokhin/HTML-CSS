class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = `${age} years`;
  }

  say() {}

  walk() {
    console.log("i am walking");
  }
}

class Cat extends Animal {
  constructor(name, age, color = "red") {
    super(name, age);
    this.color = color;
  }

  say() {
    console.log("meow");
  }
}

class Dog extends Animal {
  constructor(name, age) {
    super(name, age);
  }

  say() {
    console.log("wof");
  }
}

class Bird extends Animal {
  constructor(name, age) {
    super(name, age);
  }

  say() {
    console.log("pipi");
  }
}

let q = new Dog("q", 1);
let w = new Dog("w", 2);
let e = new Dog("e", 3);
let d = new Cat("fsdfsd", 3, "blue");
console.log(d);
