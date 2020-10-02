
// Time Complexity: O(n), scales linearly with input size
// Space Complexity: O(n), scales linearly with input size since we need to create an array for memoizing

function newmanConway(num) {
  if (num <= 0) throw new Error("Invalid input");
  if (num === 1) return "1";
  if (num === 2) return "1 1";

  let arr = [];
  arr[0] = 0;
  arr[1] = 1;
  arr[2] = 1;

  for (let i = 3; i <= num; i++) {
    arr[i] = arr[arr[i - 1]] + arr[i - arr[i - 1]];
  }

  return arr.slice(1).join(" ");
}

module.exports = {
  newmanConway
};