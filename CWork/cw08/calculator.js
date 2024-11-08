function Calculator(a, b) {
  this.a = a;
  this.b = b;

  this.add = function() {
    return this.a + this.b;
  };

  this.sub = function() {
    return this.a - this.b;
  };
}

let calculator1 = new Calculator(5, 3);
console.log(calculator1.add());
console.log(calculator1.sub());
