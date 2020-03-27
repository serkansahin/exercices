function findFactorialIterative(n) {
  var i = n - 1;
  var result = n * i;

  while (i > 1) {
    i--;
    result = result * i;
  }
  return result;
}

function findFactorialRecursive(n) {
  if (n < 2) {
    return n;
  }

  return n * findFactorialRecursive(n - 1);
}

//findFactorialIterative(5);

findFactorialRecursive(5);