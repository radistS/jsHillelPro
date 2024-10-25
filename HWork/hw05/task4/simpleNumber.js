const number = parseInt(prompt("Введіть число"));
let isPrime = number > 1;

for (let i = 2; i <= Math.sqrt(number); i++) {
  if (number % i === 0) {
    isPrime = false;
    break;
  }
}

if (isPrime) {
  console.log(`${number} є простим числом`);
} else {
  console.log(`${number} не є простим числом`);
}
