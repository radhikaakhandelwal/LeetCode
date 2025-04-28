/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
        return Math.max(
            nums[0],
            Math.max(
                helper(nums.slice(1)),
                helper(nums.slice(0, -1)),
            ),
        );
}


function helper(nums) {
        let rob1 = 0;
        let rob2 = 0;
        for (const num of nums) {
            const newRob = Math.max(rob1 + num, rob2);
            rob1 = rob2;
            rob2 = newRob;
        }
        return rob2;
    
};

// var rob = function(nums) {
//     let srob1 = 0
//     let srob2 = 0
//     let lrob1 = 0
//     let lrob2 = 0
//     for(let i = 0; i < nums.length; i++){
//         if(i === 0){ //last included
//             let lcur = Math.max(lrob1+nums[i], lrob2)
//             lrob1 = lrob2
//             lrob2 = lcur

//         }else if(i === nums.length - 1){ //first included
//             let scur = Math.max(srob1+nums[i], srob2)
//             srob1 = srob2
//             srob2 = scur
//         }
//         else{
//             let lcur = Math.max(lrob1+nums[i], lrob2)
//             lrob1 = lrob2
//             lrob2 = lcur

//             let scur = Math.max(srob1+nums[i], srob2)
//             srob1 = srob2
//             srob2 = scur

//         }
//     }
//     return Math.max(srob2, lrob2)
// };
