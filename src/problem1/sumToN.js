// Assuming n >= 0, integer:
const sum_to_n_a = (n) => (n * (n + 1)) / 2;

const sum_to_n_b = (n) => (n === 0 ? 0 : sum_to_n_b(n - 1) + n);

const sum_to_n_c = (n) => [...Array(n).keys()].reduce((partialSum, a) => partialSum + a, n);

// works for both positive and negative n
const sum_to_n_d = function (n) {
  let result = 0;
  let sign = n > 0 ? 1 : n == 0 ? 0 : -1;
  while (n !== 0) {
    result += n;
    n -= sign;
  }
  return result;
};

const sum_to_n_e = (n) => (n === 0 ? 0 : (n - 1) ** 2 - (sumFromAtoB(-1, n - 3) - 1));
const sum_to_n_f = (n) => (n === 0 ? 0 : sum_to_n_f(n - 1) * 2 - sumFromAtoB(-1, n - 2));

// sums from any integer a to any integer b
function sumFromAtoB(a, b) {
  let result = 0;
  const sign = a < b ? 1 : -1;
  while (a !== b) {
    result += a;
    a += sign * 1;
  }
  return result + a;
}

console.log(sum_to_n_a(5));
console.log(sum_to_n_b(6));
console.log(sum_to_n_c(7));
console.log(sum_to_n_d(-8));
console.log(sum_to_n_e(9));
console.log(sum_to_n_f(10));
