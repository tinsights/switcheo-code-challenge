/*
Task
Provide 3 unique implementations of the following function.
**Input**: `n` - any integer 
*Assuming this input will always produce a result lesser than `Number.MAX_SAFE_INTEGER`*.
**Output**: `return` - summation to `n`, i.e. `sum_to_n(5) === 1 + 2 + 3 + 4 + 5 === 15`.
*/

// Assuming n >= 0, integer:
const sum_to_n_a = function (n) {
  return (n * (n + 1)) / 2;
};

const sum_to_n_b = function (n) {
  return n === 0 ? 0 : sum_to_n_b(n - 1) + n;
};

const sum_to_n_c = function (n) {
  return [...Array(n).keys()].reduce((partialSum, a) => partialSum + a, n);
};

const sum_to_n_d = function (n) {
  let result = 0;
  while (n > 0) {
    result += n;
    n -= 1;
  }
  return result;
};

// 5: 4^2 - 1 == 15
// 6: 5^2 - 4 == 21
// 7: 6^2 - 8 == 28
// 8: 7^2 - 13 == 36
// 9: 8^2 - 19 == 45
// 10: 9^2 - 26 == 55

const sum_to_n_e = function (n) {
  return n > 4 ? (n - 1) ** 2 - helper(n - 4) : sum_to_n_a(n);

  function helper(n) {
    let diff = 3;
    let result = 1;
    while (n > 1) {
      result += diff;
      diff += 1;
      n -= 1;
    }
    return result;
  }
};

console.log(sum_to_n_e(5));
console.log(sum_to_n_e(6));
console.log(sum_to_n_e(7));
console.log(sum_to_n_e(8));
console.log(sum_to_n_e(9));
console.log(sum_to_n_e(10));
