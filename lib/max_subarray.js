
// Time Complexity:
// Space Complexity:

function maxSubArray (nums) {
  let maxSoFar = nums[0]
  let maxEndingHere = 0
  // let negMax = nums[0]

  if (nums.length === 0){
    return null
  }

  for(let i = 0; i < nums.length; i++){
    maxEndingHere = maxEndingHere + nums[i]

    if(maxSoFar < maxEndingHere){
      maxSoFar = maxEndingHere
    }
    
    if(maxEndingHere < 0 ){
      maxEndingHere = 0
    }
  }
  return maxSoFar
}

module.exports = {
  maxSubArray
}