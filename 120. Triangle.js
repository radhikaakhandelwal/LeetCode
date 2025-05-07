/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {

    let height = triangle.length
    let dp = new Array(height)

    for(let i = 0; i < height; i++){
        dp[i] = triangle[height-1][i]
    }

    for(let row = height - 2; row >= 0; row--){
        for(let col = 0; col <= row; col++){
            dp[col] = triangle[row][col] + Math.min(dp[col], dp[col+1])
        }
    }

    return dp[0]
};

// TABULATION
// TC: O(n*n)
// SC: O(n*n) DP grid
// var minimumTotal = function(triangle) {

//     let height = triangle.length
//     let dp = new Array(height).fill().map((_, i) => new Array(i + 1).fill(-1))

//     for(let i = 0; i < height; i++){
//         dp[height-1][i] = triangle[height-1][i]
//     }

//     for(let row = height - 2; row >= 0; row--){
//         for(let col = 0; col <= row; col++){
//             dp[row][col] = triangle[row][col] + Math.min(dp[row+1][col], dp[row+1][col+1])
//         }
//     }

//     return dp[0][0]
// };

// MEMOIZATION
// TC: O(n*n)
// SC: O(n) recusion stack + O(n*n) DP grid
// var minimumTotal = function(triangle) {
    
//     let height = triangle.length
//     let dp = new Array(height).fill().map((_, i) => new Array(i + 1).fill(-1))

//     function helper(r, c){
//         if(dp[r][c] !== -1) return dp[r][c]
//         if(r === height - 1) return triangle[r][c]

//         dp[r][c] = triangle[r][c] + Math.min(helper(r+1, c), helper(r+1, c+1))
//         return dp[r][c]
//     }

//     // for every r, c - I have 2 options: either pick r+1, c+1 as next or r+1, c as next
//     return helper(0, 0)
// };
