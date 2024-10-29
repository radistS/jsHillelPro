function removeElements(array, item) {
  let index = array.indexOf(item);
  while (index !== -1) {
    array.splice(index, 1);
    index = array.indexOf(item);
  }
}

function generateRandomArray(length, min, max) {
  const array = [];
  for (let i = 0; i < length; i++) {
    const randomNum =generateRandomNumber(min, max);
    array.push(randomNum);
  }
  return array;
}

function generateRandomNumber(min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const min = 0;
const max = 9;
const value = generateRandomNumber(min, max)
const array = generateRandomArray(15, min, max);
console.log("array >> " + array);
console.log("value >> " + value);
removeElements(array, value);
console.log("array result >> " +  array);
