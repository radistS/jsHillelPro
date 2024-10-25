let result = "";
for (let i = 10; i <= 20; i++) {
  result += i + (i < 20 ? ", " : "");
}
console.log('\033[36m', "from 10 to 20 step 1 >>> ", '\033[31m', result);
