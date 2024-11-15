const readline = require('readline');

function sumInput() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  const numbers = [];

  function askForNumber() {
    rl.question("please enter number or empty if want STOP: ", (input) => {
      if (input.trim() === "" || isNaN(input)) {
        const sum = numbers.reduce((acc, num) => acc + num, 0);
        rl.close();
        console.log();
        console.log("summ:", sum);
        console.log('input numbers >>> '  + numbers)
      } else {
        numbers.push(+input);
        askForNumber();
      }
    });
  }

  askForNumber();
}

sumInput();
