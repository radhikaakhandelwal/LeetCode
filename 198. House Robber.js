/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
        let rob1 = 0;
        let rob2 = 0;

        for (const num of nums) {
            const temp = Math.max(num + rob1, rob2);
            rob1 = rob2;
            rob2 = temp;
        }
        return rob2;
};

// MEMOIZATION:
// var rob = function(nums) {
//     let arr = new Array(nums.length)
//     arr[0] = nums[0]

//     function helper(idx){
//         if(arr[idx]) return arr[idx]
//         if(idx === 0) return 0
//         if(idx < 0) return 0

//         return arr[idx] = Math.max(nums[idx]+helper(idx-2), helper(idx-1))
//     }
//     return helper(nums.length-1)
// };

// BRUTE FORCE:
// after any house, you have 2 options:
// Rob the house & jump to i + 2
// Skip the house & jump to i + 1

// var rob = function(nums) {
//     let robMax = 0;
//     function helper(idx, sum) {
//         if (idx >= nums.length) {
//             robMax = Math.max(robMax, sum);
//             return;
//         }
//         // Choice 1: Rob this house
//         helper(idx + 2, sum + nums[idx]);
//         // Choice 2: Skip this house
//         helper(idx + 1, sum);
//     }
//     helper(0, 0);
//     return robMax;
// };
