(() => {
  // src/client/samples/inheritance-sample.ts
  var Animal = class {
    name;
    constructor(name) {
      this.name = name;
    }
    makeSound() {
      console.log("Generic animal sound");
    }
    walk() {
      console.log(`${this.name} is walking`);
    }
  };
  var Dog = class extends Animal {
    breed;
    constructor(name, breed) {
      super(name);
      this.breed = breed;
    }
    makeSound() {
      console.log("Woof!");
    }
  };
  var myAnimal = new Animal("Roger");
  var myDog = new Dog("Buddy", "Golden Retriever");
  console.log(myDog.name);
  console.log(myDog.breed);
  myDog.makeSound();
  myDog.walk();
  myAnimal.makeSound();
  myAnimal.walk();
})();
