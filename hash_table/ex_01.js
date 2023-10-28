function numberToArray(x) {
  const xStr = x.toString().split("");
  const result = [];
  for (let i = xStr.length - 1; i >= 0; i--) {
    result.push(xStr[i]);
  }
  return result;
}

console.log(numberToArray(987654321));
