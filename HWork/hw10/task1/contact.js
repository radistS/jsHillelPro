function User(name, age, location, profession) {
  this.name = name;
  this.age = age;
  this.location = location;
  this.profession = profession;

  this.getInfo = function() {
    console.log(`name: ${this.name}`);
    console.log(`age: ${this.age}`);
    console.log(`location: ${this.location}`);
    console.log(`job title: ${this.profession}`);
  };
}
