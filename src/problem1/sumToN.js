/*
Task
Provide 3 unique implementations of the following function.
**Input**: `n` - any integer 
*Assuming this input will always produce a result lesser than `Number.MAX_SAFE_INTEGER`*.
**Output**: `return` - summation to `n`, i.e. `sum_to_n(5) === 1 + 2 + 3 + 4 + 5 === 15`.
*/

// Assuming n > 0, integer:
const sum_to_n_a = function (n) {
  return (n * (n + 1)) / 2;
};

const sum_to_n_b = function (n) {
  const result = n === 1 ? 1 : sum_to_n_b(n - 1) + n;
  return result;
};

const sum_to_n_c = function (n) {
  let result = 0;
  for (let i = 0; i <= n; i++) {
    result += i;
  }
  return result;
};

console.log(sum_to_n_a(5));
console.log(sum_to_n_b(6));
console.log(sum_to_n_c(7));
