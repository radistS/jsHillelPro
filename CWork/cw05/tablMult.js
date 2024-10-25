function printHeader(method) {
  console.log("\n--- Квадрати чисел від 1 до 9: " + method + " ---");
}

// Використання циклу while
function squaresWithWhile() {
  printHeader("while");
  let i = 1;
  while (i <= 9) {
    console.log(`${i}^2 = ${i * i}`);
    i++;
  }
}

// Використання циклу do ... while
function squaresWithDoWhile() {
  printHeader("do ... while");
  let j = 1;
  do {
    console.log(`${j}^2 = ${j * j}`);
    j++;
  } while (j <= 9);
}

// Використання циклу for
function squaresWithFor() {
  printHeader("for");
  for (let k = 1; k <= 9; k++) {
    console.log(`${k}^2 = ${k * k}`);
  }
}

// Виклик усіх функцій
squaresWithWhile();
squaresWithDoWhile();
squaresWithFor();
