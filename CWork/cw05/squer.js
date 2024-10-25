let squares = "";
for (let i = 10; i <= 20; i++) {
  squares += (i * i) + (i < 20 ? ", " : "");
}
console.log(squares);
