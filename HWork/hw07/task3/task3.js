function getRandomNumber() {
  return Math.floor(Math.random() * (110 - 90 + 1)) + 90;
}

function requestNumber() {
  let number;
  let attempts = 0;
  const maxAttempts = 10;

  while (attempts < maxAttempts) {
    number = getRandomNumber();
    console.log(`Attempt ${attempts + 1}: generated number - ${number}`);

    if (number > 100) break;
    attempts++;
  }

  console.log(`Last generated number: ${number}`);
}

requestNumber();
