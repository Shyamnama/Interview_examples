function Person(name, age, place) {
  this.name = name;
  this.age = age;
  this.place = place;
}

Person.prototype.job = "Web Developer"
const person1 = new Person("Shyam", 26, "Noida");
person1.__proto__.job = "Server operator" 

console.log(Person.prototype);
console.log(person1.prototype);
console.log(person1.__proto__);