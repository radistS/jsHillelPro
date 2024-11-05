let obj = {
  language: "html",
  version: 5,

  result: () => `${obj.language} - ${obj.version}`,

  resultUnd: () => `${this.language} - ${this.version}`

};

console.log(obj.result());
console.log(obj.resultUnd());
