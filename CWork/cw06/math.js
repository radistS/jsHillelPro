function min(a, b) {
  return a < b ? a : b;
}

function pow(x, n) {
  if (n === 0) return 1;
  let result = 1;
  for (let i = 0; i < n; i++) {
    result *= x;
  }
  return result;
}
