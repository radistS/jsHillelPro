function multiply(a) {
  return function (b) {
    return a * b;
  };
}

const result = multiply(5)(2);

console.log(result)
console.log(10 === result)
