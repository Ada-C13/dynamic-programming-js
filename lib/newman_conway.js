
// Time Complexity: O(n)
// Space Complexity: O(n)

// P(1) = 1
// P(2) = 1
// for all n > 2
// P(n) = P(P(n - 1)) + P(n - P(n - 1))

function newmanConway(num) {
  if(num <= 0) throw new Error("Invalid input provided");
  if(num === 1) return "1";
  if(num === 2) return "1 1";

  const array = [];
  array[0] = 0;
  array[1] = 1;
  array[2] = 1;

  for(let i = 3; i <= num; i++) {
    array[i] = array[array[i - 1]] + array[i - array[i - 1]];
  }

  return array.slice(1).join(" ");
}

module.exports = {
  newmanConway
};