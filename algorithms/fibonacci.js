function fiboLoop(n) {
  let a = 1;
  let b = 0;
  let tmp = undefined;

  while (n >= 0) {
    tmp = a;

    a = a + b;

    b = tmp;

    n--;
  }
  return b;
}

console.log(fiboLoop(9));