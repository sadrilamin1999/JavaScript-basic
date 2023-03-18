class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
  print() {
    console.log(`Name: ${this.name}, Email: ${this.email}`);
  }
}
const person1 = new User("Sadril", "sadrilashuvo420@");
console.log(person1.name, person1.email);
