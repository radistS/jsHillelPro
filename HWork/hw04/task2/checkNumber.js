let number = prompt("Enter a three-digit number:");

// Перетворюємо число на рядок, щоб легко отримати окремі цифри
let digit1 = number.charAt(0);
let digit2 = number.charAt(1);
let digit3 = number.charAt(2);

// Отримуємо цифри числа - другий спосіб
// let digit1 = Math.floor(number / 100);         // Перша цифра
// let digit2 = Math.floor((number % 100) / 10);  // Друга цифра
// let digit3 = number % 10;                      // Третя цифра

// Перевіряємо, чи всі цифри однакові
if (digit1 === digit2 && digit2 === digit3) {
  console.log("All digits are the same.");
} else {
  console.log("Not all digits are the same.");
}

// Перевіряємо, чи є серед цифр однакові
if (digit1 === digit2 || digit2 === digit3 || digit1 === digit3) {
  console.log("There are some identical digits.");
} else {
  console.log("No identical digits found.");
}
