/**
 * @param {number[][]} grid
 * @return {number}
 */

// If you visiting and rottening orages level wise - use BFS
// for every breadth/level you rotten orages in given time

// Grid traversal (initial pass) - O(N×M)
// Iterate through the entire grid once to find all rotten oranges and add them to the queue.
// BFS traversal - O(N×M) Each cell is added to the queue at most once.
// Final check for fresh oranges - O(N×M)
//O(3×N×M) = O(N×M)

var orangesRotting = function(grid) {
    let row = grid.length
    let col = grid[0].length
    let q = []
    let visited = new Set()

    for(let i = 0; i < row; i++){
        for(let j = 0; j < col; j++){
            if(grid[i][j] === 2){
                q.push([i,j])
                visited.add(`${i}, ${j}`)
            }
        }
    }

    let time = 0 

    while(q.length > 0){
        let size = q.length
        let changed = false

        function addOrange(i,j){
            if(i >= row || i < 0 || j >= col || j < 0 || grid[i][j] === 0 || visited.has(`${i}, ${j}`)) return
            q.push([i,j]) 
            grid[i][j] = 2
            visited.add(`${i}, ${j}`)
            changed = true
        }

        for(let k = 0; k < size; k++){
            let [i,j] = q.shift()

            addOrange(i, j-1)
            addOrange(i-1, j)
            addOrange(i, j+1)
            addOrange(i+1, j)
        }
        if(changed) time++
    }

    for(let i = 0; i < row; i++){
        for(let j = 0; j < col; j++){
            if(grid[i][j] === 1){
                return -1
            }
        }
    }
    return time

};
