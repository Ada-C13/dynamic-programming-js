
// Time Complexity: O(n)
// Space Complexity: O(1)

function maxSubArray (nums) {
  if(nums.length === 0) return null;

  let max_current = nums[0];
  let max_global = nums[0];

  for(let i = 1; i < nums.length; i++) {
    max_current = Math.max(nums[i], max_current + nums[i]);
    if(max_global < max_current) {
      max_global = max_current;
    }
  }

  return max_global;
}

module.exports = {
  maxSubArray
}