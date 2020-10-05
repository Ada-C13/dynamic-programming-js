// Time Complexity: O(n)
// Space Complexity: O(1)

function maxSubArray(nums) {
  if (nums.length === 0) return null;

  let maxSoFar = nums[0];
  let maxCurrent = nums[0];

  let i = 1;
  while (i < nums.length) {
    maxCurrent = Math.max(nums[i], maxCurrent + nums[i]);
    maxSoFar = Math.max(maxSoFar, maxCurrent);
    i++;
  }

  return maxSoFar;
}

module.exports = {
  maxSubArray,
};
