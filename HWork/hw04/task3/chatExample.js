// Запитуємо у користувача рік народження, місто та улюблений спорт
let yearOfBirth = prompt("Enter your year of birth:");
let city = prompt("In which city do you live?");
let favoriteSport = prompt("What is your favorite sport?");

// Перевіряємо, чи не натиснув користувач "Скасувати" або залишив порожнє поле
if (!yearOfBirth) {
  alert("Шкода, що Ви не захотіли ввести свій рік народження.");
} else if (!city) {
  alert("Шкода, що Ви не захотіли ввести своє місто.");
} else if (!favoriteSport) {
  alert("Шкода, що Ви не захотіли ввести свій улюблений вид спорту.");
} else {
  // Обчислюємо вік користувача
  let currentYear = new Date().getFullYear();
  let age = currentYear - yearOfBirth;

  // Повідомлення про місто
  let cityMessage;
  switch (city.toLowerCase()) {
    case "київ":
      cityMessage = "Ти живеш у столиці України!";
      break;
    case "вашингтон":
      cityMessage = "Ти живеш у столиці США!";
      break;
    case "лондон":
      cityMessage = "Ти живеш у столиці Великобританії!";
      break;
    default:
      cityMessage = "Ти живеш у місті " + city + ".";
      break;
  }

  // Повідомлення про спорт
  let sportMessage;
  switch (favoriteSport.toLowerCase()) {
    case "футбол":
      sportMessage = "Круто! Хочеш стати як Ліонель Мессі?";
      break;
    case "баскетбол":
      sportMessage = "Круто! Хочеш стати як Майкл Джордан?";
      break;
    case "теніс":
      sportMessage = "Круто! Хочеш стати як Роджер Федерер?";
      break;
    default:
      sportMessage = "Цікавий вибір спорту!";
      break;
  }

  // Виводимо всі результати в одному вікні alert
  alert("Тобі " + age + " років.\n" + cityMessage + "\n" + sportMessage);
}
