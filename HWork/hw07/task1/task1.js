function createSum() {
  let total = 0;
  return function (num) {
    total += num;
    return total;
  };
}

const sum = createSum();

console.log(4 === sum(4));
console.log(10 === sum(6));
console.log(20 === sum(10));
console.log(27 === sum(7));
