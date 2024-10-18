// Функція для перемішування масиву (Алгоритм Фішера-Йєтса)
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Отримання трьох рядків від користувача
const str1 = prompt("Введіть перший рядок:");
const str2 = prompt("Введіть другий рядок:");
const str3 = prompt("Введіть третій рядок:");

// Масив рядків
const strings = [str1, str2, str3];

// Вивести перемішані рядки 5 разів
for (let i = 0; i < 5; i++) {
  // Перемішуємо масив і виводимо у випадковому порядку
  const shuffledStrings = shuffleArray(strings);
  // Виведення рядків у довільному порядку за допомогою шаблонних рядків
  console.log(`${shuffledStrings.join(', ')}`);
}


