/**
 * @param {number[]} cost
 * @return {number}
 */

// start traversing from back
// from idx = cost.length - 1, min cost to reach top = cost[cost.length - 1]
// for idx = cost.length - 2, min cost to reach top is cost[cost.length - 2]
// from idx = cost.length - 3, min cost to reach top is:
// Math.min((cost[idx] + cost[idx+1]),     ...if we climb 1 stair
//          (cost[idx] + cost[idx+2])      ...if we climb 2 stairs

var minCostClimbingStairs = function(cost) {
         for (let i = cost.length - 3; i >= 0; i--) {
            cost[i] += Math.min(cost[i + 1], cost[i + 2]);
        }
        return Math.min(cost[0], cost[1]);
};

// BRUTE FORCE:
// var minCostClimbingStairs = function(cost) {
//     let price = Infinity

//     function helper(i, c){

//         if(i >= cost.length){
//             price = Math.min(price, c)
//             return
//         }

//         helper(i+1, c + cost[i])
//         helper(i+2, c + cost[i])
//     }

//     helper(0,0)
//     helper(1,0)
//     return price
// };
