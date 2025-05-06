/**
 * @param {number[][]} grid
 * @return {number}
 */

var minPathSum = function(grid) {

    let row = grid.length
    let col = grid[0].length

    let dp = new Array(col).fill(0)   

    for(let r = 0; r < row; r++){
        for(let c = 0; c < col; c++){

            if(r === 0 && c === 0) dp[0] = grid[0][0]
            else if(r === 0) dp[c] = dp[c-1] + grid[r][c]
            else if (c === 0) dp[c] = dp[c] + grid[r][c]
            else dp[c] = grid[r][c] + Math.min(dp[c-1], dp[c])
            
        }
    }

    return dp[col - 1]
};

// TABULATION
// TC: O(m*n)
// SC: O(m * n) 
// var minPathSum = function(grid) {
//     let row = grid.length
//     let col = grid[0].length

//     let dp = new Array(row).fill().map(() => new Array(col))
//     dp[0][0] = grid[0][0]

//     for(let r = 0; r < row; r++){
//         for(let c = 0; c < col; c++){

//             if(r === 0 && c === 0) continue

//             if(r === 0)       dp[r][c] = dp[r][c-1] + grid[r][c]
//             else if (c === 0) dp[r][c] = dp[r - 1][c] + grid[r][c]

//             else{
//                 let left = dp[r][c-1] 
//                 let top = dp[r-1][c]
//                 dp[r][c] = grid[r][c] + Math.min(left, top)
//             }
//         }
//     }

//     return dp[row - 1][col - 1]
// };


// USING MEMOIZATION WITH DP GRID/MATRIX
// TC: O(m*n)
// SC: O(m + n) + O(m * n)
// var minPathSum = function(grid) {
//     let row = grid.length
//     let col = grid[0].length

//     let dp = new Array(row).fill().map(() => new Array(col))
//     dp[0][0] = grid[0][0]

//     function helper(r, c){

//         if (r < 0 || c < 0) return Infinity;
//         if (dp[r][c] !== undefined) return dp[r][c];

//         dp[r][c] = grid[r][c] + Math.min(helper(r - 1, c), helper(r, c - 1));
//         return dp[r][c];
//     }

//     return helper(row - 1, col - 1)
// };


// NAIVE SOLUTION
// var minPathSum = function(grid) {
//     let row = grid.length
//     let col = grid[0].length

//     let res = Infinity

//     function helper(r, c, result){

//         if( r === 0 && c === 0){
//             res = Math.min(res, grid[0][0] + result)
//             return
//         }

//         if(r < 0 || c < 0) return

//         helper(r-1, c, result + grid[r][c])
//         helper(r, c-1, result + grid[r][c])
//     }

//     helper(row - 1, col - 1, 0)
//     return res
// };
