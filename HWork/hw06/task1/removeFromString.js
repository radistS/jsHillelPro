function removeCharacters(input, charsToRemove) {
  const removeSet = new Set(charsToRemove);
  let result = '';

  for (const char of input) {
    if (!removeSet.has(char)) {
      result += char;
    }
  }

  return result;
}

const input = " hello world";
const charsToRemove = ['l', 'd'];
console.log(removeCharacters(input, charsToRemove));
