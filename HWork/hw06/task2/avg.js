function averageOfArrayNumbers(arr) {
  let sum = 0;
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number') {
      sum += arr[i];
      count++;
    }
  }

  return count > 0 ? sum / count : 0;
}

const array = [1, 'hello', 3, true, 5, null, 'world', 7];
console.log(averageOfArrayNumbers(array));
