// Time Complexity: O(num)
// Space Complexity: O(num) due to using a call stack and an array of solutions

function newmanConwayHelper(sequence, current, n) {
  if (current === n) {
    return sequence;
  }

  const solution =
    sequence[sequence[current - 1]] + sequence[current - sequence[current - 1]];
  sequence.push(solution);

  return newmanConwayHelper(sequence, current + 1, n);
}

function newmanConway(num) {
  if (num < 1) {
    throw new Error("n cannot be a negative number");
  }

  if (num === 1) {
    return "1";
  }

  const resultArray = newmanConwayHelper([0, 1, 1], 3, num + 1);
  const resultString = resultArray.splice(1, resultArray.length).join(" ");
  return resultString;
}

module.exports = {
  newmanConway,
};
