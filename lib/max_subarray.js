// Time Complexity: O(n)
// Space Complexity:O(1)

function maxSubArray(nums) {
  if (nums.length === 0) {
    return null;
  }
  let maxSoFar = nums[0];
  let maxEndingHere = nums[0];

  for (let i = 1; i < nums.length; i++) {
    maxEndingHere = maxEndingHere + nums[i];
    if (nums[i] > maxEndingHere) {
      maxEndingHere = nums[i];
    }
    if (maxSoFar < maxEndingHere) {
      maxSoFar = maxEndingHere;
    }
  }
  return maxSoFar;
}

module.exports = {
  maxSubArray,
};
