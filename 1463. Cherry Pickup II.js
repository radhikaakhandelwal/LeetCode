/**
 * @param {number[][]} grid
 * @return {number}
 */

// TABULATION
// TC:  O(n × m²)
var cherryPickup = function(grid) {

    const n = grid.length;
    const m = grid[0].length;

    const dp = new Array(n).fill(0).map(() =>
                new Array(m).fill(0).map(() =>
                new Array(m).fill(-1)));

    for(let c1 = 0; c1 < m; c1++){
        for(let c2 = 0; c2 < m; c2++){
            if(c1 === c2) dp[n-1][c1][c2] = grid[n-1][c1]
            else dp[n-1][c1][c2] = grid[n-1][c1] + grid[n-1][c2]
        }    
    }

    for (let row = n - 2; row >= 0; row--) {
    for (let c1 = 0; c1 < m; c1++) {
        for (let c2 = 0; c2 < m; c2++) {
            let maxi = -Infinity;

            for (let i = -1; i <= 1; i++) {
                for (let j = -1; j <= 1; j++) {
                    let newC1 = c1 + i;
                    let newC2 = c2 + j;

                    if (newC1 >= 0 && newC1 < m && newC2 >= 0 && newC2 < m) {
                        let cherries = (c1 === c2) ? grid[row][c1] : grid[row][c1] + grid[row][c2];
                        cherries += dp[row + 1][newC1][newC2];
                        maxi = Math.max(maxi, cherries);
                    }
                }
            }

            dp[row][c1][c2] = maxi;
        }
    }
}


    return dp[0][0][m-1]
};


// MEMOIZATION WITH RECUSION
// var cherryPickup = function(grid) {
//     const n = grid.length;
//     const m = grid[0].length;

//     const dp = new Array(n).fill(0).map(() =>
//                 new Array(m).fill(0).map(() =>
//                 new Array(m).fill(-1)));

//     function helper(r, c1, c2){
//         if(c1 < 0 || c2 < 0 || c1 >= m || c2 >= m) return -Infinity

//         if(dp[r][c1][c2] !== -1) return dp[r][c1][c2]
         
//         if(r === n - 1){
//             if(c1 === c2) return grid[r][c1]
//             else return grid[r][c1] + grid[r][c2]
//         }
                    
//         let maxi = -Infinity

//         for(let i = -1; i < 2; i++){
//             for(let j = -1; j < 2; j++){

//                 let newC1 = c1 + i
//                 let newC2 = c2 + j

//                 let cherries = c1 === c2 ?  grid[r][c1] : grid[r][c1] + grid[r][c2]

//                 cherries += helper(r + 1, c1 + i, c2 + j)
//                 maxi = Math.max(maxi, cherries)
//             }   
//         }
//         dp[r][c1][c2] = maxi
//         return maxi 
//     }

//     return helper(0,0,m-1)
// };
