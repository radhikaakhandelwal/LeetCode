/**
 * @param {number[]} nums
 * @return {boolean}
 */
 
// TC: O(N∗S)
var canPartition = function(nums) {
    let s = 0
    for(let n of nums){
        s += n
    }

    if(s%2 !== 0) return false 

    let dp = new Array(nums.length).fill().map(() => new Array((s/2)+1).fill(false))

    for(let i = 0; i < nums.length; i++){
        dp[i][0] = true
    }

    dp[0][nums[0]] = true

    for(let idx = 1; idx < nums.length; idx++){
        for(let target = 1; target <= s/2; target++){

            let pick = false
            if (target >= nums[idx]) pick = dp[idx - 1][target - nums[idx]]

            let notPick = dp[idx-1][target]
            dp[idx][target] = pick || notPick
        }
    }
    return dp[nums.length-1][s/2]
};
