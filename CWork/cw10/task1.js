const user = {
  name: "Stepurko",
  age: 41,
  email: "olexandr@example.com",
  isAdmin: true,

  getInfo() {
    return `name: ${this.name}, age: ${this.age}, email: ${this.email}, admin: ${this.isAdmin ? "yes" : "no"}`;
  }
};

console.log(user.getInfo());
