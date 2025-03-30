/**
 * @param {number[][]} grid
 * @return {number}
 */

// Iterate over every cell once in the grid via the nested for loop.
// No cell is visited more than once because - either it’s water (0) or it gets marked as visited (grid[i][j] = 0).
// So in the worst case all m × n cells are traversed once
// Time complexity: O(m*n) 

// Intuition: Treat each cell in the grid as a node of a graph. Iterate through them every time you find and. 
//Increment max area by 1 for each land you iterate through.

var maxAreaOfIsland = function(grid) {
    // let visited = new Array(row).fill().map(() => new Array(col).fill(0))
    let row = grid.length
    let col = grid[0].length
    let max = 0

    function helper(i, j){
        // if(i >= row || j >= col || i < 0 || j < 0 || grid[i][j] === 0 || visited[i][j] === 1) return 0
        // visited[i][j] = 1

        if(i >= row || j >= col || i < 0 || j < 0 || grid[i][j] === 0) return 0
        grid[i][j] = 0
        return 1 + helper(i, j-1) + helper(i-1, j) + helper(i, j+1) + helper(i+1, j)
    }

    for(let i = 0; i < row; i++){
        for(let j = 0; j < col; j++){
            if(grid[i][j] === 1){
                max = Math.max(max, helper(i, j))
            }
        }
    }
    return max
};
