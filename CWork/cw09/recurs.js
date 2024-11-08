class NumberOperations {
  constructor(n = 6) {
    this.n = n;
  }

  setN(n) {
      this.n = n;
  }

  sumToN(n = this.n) {
    this.validate(n)
    if (n === 0) return 0;
    return n + this.sumToN(n - 1);
  }

  factorial(n = this.n) {
    this.validate(n)
    if (n === 0 || n === 1) return 1;
    return n * this.factorial(n - 1);
  }

  power(m, n = this.n) {
  this.validate(n)
    if (m === 0) return 1;
    return n * this.power(m - 1, n);
  }

  fibonacci(n = this.n) {
    this.validate(n)
    if (n === 0) return 0;
    if (n === 1) return 1;
    return this.fibonacci(n - 1) + this.fibonacci(n - 2);
  }

  validate (n) {
    if (n < 0) {
      console.error("Error!");
      return null;
    }
  }
}

const numOps = new NumberOperations(0);

console.log("Сума до n:", numOps.sumToN());
console.log("Факторіал n:", numOps.factorial());
console.log("n^3:", numOps.power(3));
console.log("Число Фібоначчі для n:", numOps.fibonacci());
