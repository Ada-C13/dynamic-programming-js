// Time Complexity: 0(n)
// Space Complexity: O(1)

function newmanConway(num) {
  solutions = [0, 1, 1];
  if (num === 0) {
    throw Error("Error");
  } else if (num === 1) {
    return "1";
  }
  for (let i = 3; i <= num; i++) {
    let first = solutions[solutions[i - 1]] + solutions[i - solutions[i - 1]];

    solutions.push(first);
  }
  solutions.shift();
  return solutions.join(" ");
}

module.exports = {
  newmanConway,
};
