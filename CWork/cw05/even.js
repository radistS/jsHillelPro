let evenSum = 0;
for (let i = 30; i <= 80; i += 2) {
  evenSum += i;
}
console.log(evenSum);

evenSum = 0;
for (i = 30; i <= 80; i++) {
  if(i % 2 === 0) {
    evenSum += i;
  }
}
console.log(evenSum);
