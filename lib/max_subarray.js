
// Time Complexity:
// Space Complexity:

function maxSubArray (nums) {
  if(nums.length == 0){return null};
  if(nums.length == 1){return nums[0]};

  let toCompare = nums[0];
  let finalLargest = nums[0];

  for(let pointer=1; pointer<nums.length; pointer++){
      toCompare = Math.max(nums[pointer], (toCompare + nums[pointer]))
      
      if(toCompare > finalLargest){
          finalLargest = toCompare;
      }
  }
  return finalLargest;
}


module.exports = {
  maxSubArray
}