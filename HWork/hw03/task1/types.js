// Виведення типів даних за допомогою console.log і typeof

// примітивні
console.log("Type of undefined:", typeof undefined); // "undefined"
console.log("Type of null:", typeof null); // "object" (це офіційно визнана помилка у JavaScript)
console.log("Type of true:", typeof true); // "boolean"
console.log("Type of 123:", typeof 123); // "number"
console.log("Type of 'Hello':", typeof 'Hello'); // "string"
console.log("Type of Symbol():", typeof Symbol()); // "symbol"
console.log("Type of BigInt:", typeof BigInt(123)); // "bigint"

// обєкти
console.log("Type of function:", typeof function(){}); // "function"
console.log("Type of array:", typeof [1, 2, 3]); // "object"
console.log("Type of object:", typeof {name: "Olexandr"}); // "object"
