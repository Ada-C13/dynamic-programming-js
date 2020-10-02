
// Time Complexity: O(n)
// Space Complexity: O(1)

function newmanConway(num) {
  if(num == 0){throw new Error }
  if(num == 1){return "1"}
  if(num == 2){return "1 1"}

  let seq = [0,1,1]

  for(let n = 3; n <= num; n++){
    nextNum = seq[seq[n - 1]] + seq[n - seq[n - 1]]
    seq.push(nextNum)
  }
  return seq.slice(1).join(" ")
}

module.exports = {
  newmanConway
};