/**
 * @param {character[][]} grid
 * @return {number}
 */

// Intuition: Think of each element in the grid as a node of the graph. 
// Start travesing the grid and everytime you find '1' that is not been visited - traverse 
// Getting a '1' that has not been visited means new island. So count ++
// In the traversal function, traverse all direction of the current node (up, right, bottom, left)
// If we get a '1' that has not been visited, call traversal function on that '1'. Nothing for '0'

var numIslands = function(grid) {
    let row = grid.length
    let col = grid[0].length
    let count = 0

    let visitedMatrix = new Array(row).fill().map(() => new Array(col).fill(0))

    function helper(i,j){

        if (i < 0 || j < 0 || i >= row || j >= col || grid[i][j] === '0' || visitedMatrix[i][j] === 1) {
            return;
        }

        visitedMatrix[i][j] = 1

        helper(i,j-1)
        helper(i-1,j)
        helper(i,j+1)
        helper(i+1,j)

    }

    for(let i = 0; i < row; i++){
        for(let j = 0; j < col; j++){
            if(grid[i][j] === '1' && visitedMatrix[i][j] === 0){
                helper(i, j)
                count++
            }
        }
    }
    return count
};
