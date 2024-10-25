

// -- 2
console.log("task 2")
let a = 5;
let b = 7;
let result = (a > b) ? `${a} більше за ${b}` : `${b} більше за ${a}`;
console.log(result);

// -- 3
console.log("task 3")
let number = 42;
let firstDigit = Math.floor(number / 10);
let secondDigit = number % 10;

if (firstDigit > secondDigit) {
  console.log("Перша цифра більша: " + firstDigit);
} else if (firstDigit < secondDigit) {
  console.log("Друга цифра більша: " + secondDigit);
} else {
  console.log("Цифри рівні");
}

// -- 4
console.log("task 4")
 number = 15;
let parity = (number % 2 === 0) ? `${number} є парним числом` : `${number} є непарним числом`;
console.log(parity);

// -- 5
console.log("task 5")
number = 137;
let lastDigit = number % 10;

let lastDigitParity = (lastDigit % 2 === 0) ? `Остання цифра парна: ${lastDigit}` : `Остання цифра непарна: ${lastDigit}`;
console.log(lastDigitParity);


// -- 6
console.log("task 6")
let min = -1000;
let max = 1000;
number = Math.floor(Math.random() * (max - min) + min);
let rangeCheck = (number >= 0 && number <= 500) ? `${number} Входить у діапазон 0 .. 500` : `${number} Не входить у діапазон 0 .. 500`;
console.log(rangeCheck);
