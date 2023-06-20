function Matriz(N, M) {
  if (N === 1) {
    return "R";
  }
  if (M === 1) {
    return "D";
  }
  if (N === 2 && M === 2) {
    return "L";
  }
  if ((N * M) % 2 === 0) {
    if (M % 2 === 0) {
      return "R";
    } else {
      return "L";
    }
  } else {
    if (N % 2 === 0) {
      return "U";
    } else {
      return "D";
    }
  }
}

console.log(Matriz(1, 5));
console.log(Matriz(7, 1));
