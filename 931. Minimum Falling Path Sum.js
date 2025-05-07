/**
 * @param {number[][]} matrix
 * @return {number}
 */

// SPACE OPTIMIZED
var minFallingPathSum = function(matrix) {
    let n = matrix.length
    let dp = new Array(n).fill(-1)

    for(let r = 0; r < n; r++){
        
        let temp = new Array(n).fill(-1)
        
        for(let c = 0; c < n; c++){           
            if(r === 0){
                dp[c] = matrix[0][c]
            }
            else{
                if(c < 1) temp[c] = matrix[r][c] + Math.min(dp[c], dp[c+1])
                else if(c === n-1) temp[c] = matrix[r][c] + Math.min(dp[c], dp[c-1])
                else temp[c] = matrix[r][c] + Math.min(dp[c], dp[c-1], dp[c+1])
            }
        }
        if(r !== 0)dp = temp
    }
    return Math.min(...dp);
}

// TABULATION
// TC: O(N*N)
// var minFallingPathSum = function(matrix) {
//     let n = matrix.length
//     let totalSum = Infinity

//     let dp = new Array(n).fill().map(() => new Array(n).fill(-1))

//     for(let r = 0; r < n; r++){
//         for(let c = 0; c < n; c++){

//             if(r === 0){
//                 dp[0][c] = matrix[0][c]
//             }

//             else{
//                 if(c < 1) dp[r][c] = matrix[r][c] + Math.min(dp[r-1][c], dp[r-1][c+1])
//                 else if(c === n-1) dp[r][c] = matrix[r][c] + Math.min(dp[r-1][c], dp[r-1][c-1])
//                 else dp[r][c] = matrix[r][c] + Math.min(dp[r-1][c], dp[r-1][c-1], dp[r-1][c+1])
//             }
//         }
//     }
//     return Math.min(...dp[n - 1]);
// }

// RECURSION WITH MEMOIZATION
// var minFallingPathSum = function(matrix) {
//     let n = matrix.length
//     let totalSum = Infinity

//     let dp = new Array(n).fill().map(() => new Array(n).fill(-1))

//     function helper(r, c){

//         if (c < 0 || c >= n) return Infinity;

//         if(dp[r][c] !== -1) return dp[r][c]
//         if(r === 0) return matrix[r][c]

//         let sum = Math.min(helper(r-1, c-1), helper(r-1, c), helper(r-1, c+1))

//         dp[r][c] = matrix[r][c] + sum
//         return dp[r][c]
//     }

//     for(let c = 0; c < n; c++){
//         totalSum = Math.min(totalSum, helper(n - 1, c))
//     }

//     return totalSum
// };

// RECURSION WITH MEMOIZATION
// By adding memoization (dp[r][c]) - Each cell is computed once and there are n × n possible (r, c) states.
// TC: O(N*N)
// var minFallingPathSum = function(matrix) {
//     let n = matrix.length
//     let totalSum = Infinity
//     let dp = new Array(n).fill().map(() => new Array(n).fill(-1))

//     function helper(r, c){

//         if (c < 0 || c >= n) return Infinity;

//         if(dp[r][c] !== -1) return dp[r][c]
//         if(r === n - 1) return matrix[r][c]

//         let sum = Math.min(helper(r+1, c-1), helper(r+1, c), helper(r+1, c+1))

//         dp[r][c] = matrix[r][c] + sum
//         return dp[r][c]
//     }

//     for(let c = 0; c < n; c++){
//         totalSum = Math.min(totalSum, helper(0, c))
//     }

//     return totalSum
// };

// BRUTE - RECURSION
// TC: O(n * 3^n) 
// var minFallingPathSum = function(matrix) {
//     let n = matrix.length
//     let totalSum = Infinity

//     function helper(r, c){

//         if (c < 0 || c >= n) return Infinity;
//         if(r === n - 1) return matrix[r][c]
//         let sum = Math.min(helper(r+1, c-1), Math.min(helper(r+1, c), helper(r+1, c+1)))
//         return matrix[r][c] + sum
//     }

//     for(let c = 0; c < n; c++){
//         totalSum = Math.min(totalSum, helper(0, c))
//     }
//     return totalSum
// };
