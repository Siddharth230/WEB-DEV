abstract class User {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  abstract greet(): string;
  hello() {
    console.log("Hi there!");
  }
}

class Employee extends User {
  name: string;
  constructor(name: string) {
    super(name)
    this.name = name;
  }
  greet() {
    return "Hi " + this.name;
  }
}