/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
// Recursion
//  TC: 2^(m*n) 
//  SC: path length = (m-1) + (n-1)
//     let count = 0
// 
//     function helper(row, col){
//         if(row >= m || col >= n) return 
//         if(row === m-1 && col === n -1){
//             count++ 
//             return
//         }
//         helper(row, col + 1)
//         helper(row + 1, col)
//     }
//     helper(0,0)
//     return count


// Memoization with DP
//  TC: (m*n) - max we iterate ovet the entire grid
//  SC: path length = (m-1) + (n-1) + o(m*n)- path length + dp grid/matrix

//     function helper(row, col){
//         if(row < 0 || col < 0) return 0
//         if(row === 0   && col === 0) return 1
//         if(dp[row][col]) return (dp[row][col]) 
//         left = helper(row, col - 1)
//         up = helper(row - 1, col)
//         dp[row][col] = left + reight
//         return dp[row][col]
//     }
//     helper(m-1, n-1)


    let newRow = new Array(n).fill(1)
    for(let r = 1; r < m; r++){
        let prev = 0

        for(let c = 0; c < n; c++){           
            let temp = prev + newRow[c]
            newRow[c] = temp
            prev = temp
        }
    }
    return newRow[n-1]

};
