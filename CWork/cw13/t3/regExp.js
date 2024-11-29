const string = "0 1 12.345 789.0";
let result = string.match(/\d+\.\d+/g);
console.log(result);

const htmlString = "<h3>Привіт!</h3>";
result = htmlString.match(/<\/?\w+>/g);
console.log(result);
