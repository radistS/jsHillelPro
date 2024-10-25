console.log("\nТаблиця множення від 2 до 10:\n");
for (let i = 2; i <= 10; i++) {
  let row = "";
  for (let j = 1; j <= 10; j++) {
    row += `${i} x ${j} = ${String(i * j).padEnd(3)}\t`;
  }
  console.log(row);
}
