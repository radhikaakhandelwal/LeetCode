/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
// memoization by using a grid/matrix
// TC: O(m*n)
// SC: O(m*n) + O((m-1) + (n-1))
    // let row = obstacleGrid.length
    // let col = obstacleGrid[0].length

    // let dp = new Array(row).fill().map(() => new Array(col))

    // function helper(r,c){

    //     if(r < 0 || c < 0) return 0
    //     if(obstacleGrid[r][c] === 1) return 0;
    //     if(r === 0 && c === 0) return 1

    //     if(dp[r][c]) return dp[r][c]
    //     let up = helper(r - 1, c);
    //     let left = helper(r, c - 1);

    //     dp[r][c] = up + left;
    //     return dp[r][c];
    // }
    // return helper(row-1, col-1)

// TABULATION
    // let row = obstacleGrid.length
    // let col = obstacleGrid[0].length

    // let dp = new Array(row).fill().map(() => new Array(col).fill(0))
    // dp[0][0] = obstacleGrid[0][0] === 0 ? 1 : 0;

    // for(let r = 0; r < row; r++){
    //     for(let c = 0; c < col; c++){

    //         if(obstacleGrid[r][c] === 1){
    //             dp[r][c] = 0
    //         }
    //         else{
    //             if (r > 0) dp[r][c] += dp[r - 1][c];
    //             if (c > 0) dp[r][c] += dp[r][c - 1];
    //         }
    //     }
    // }
    // return dp[row-1][col-1]

// SPAACE OPTIMIZED
    let row = obstacleGrid.length;
    let col = obstacleGrid[0].length;

    let dp = new Array(col).fill(0);
    dp[0] = obstacleGrid[0][0] === 0 ? 1 : 0;

    for (let r = 0; r < row; r++) {
        for (let c = 0; c < col; c++) {
            if (obstacleGrid[r][c] === 1) {
                dp[c] = 0;
            } else if (c > 0) {
                dp[c] += dp[c - 1];
            }
        }
    }

    return dp[col - 1];
};
