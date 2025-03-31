/**
 * @param {number[][]} heights
 * @return {number[][]}
 */

// The idea is to go from ocean to the cells instead of looking from cells to check if we can go to ocean
// We iterate through row 1 and col 1, and find all the cells that can be reached through pacific ocean
// We iterate through last row and last col, and find all the cells that can be reached through atlantic ocean
// Since we are going from ocean to cell we look for height >= 
// The time complexity is O(n*m)

var pacificAtlantic = function(heights) {
    let row = heights.length
    let col = heights[0].length
    let pac = new Set()
    let alt = new Set()

    function dfs(r,c, visited,maxHeight){

        if(r === row || r < 0 || c === col || c < 0 || visited.has(`${r}, ${c}`) || maxHeight > heights[r][c]) return
        visited.add(`${r}, ${c}`)

        dfs(r+1, c, visited, heights[r][c])
        dfs(r-1, c, visited, heights[r][c])
        dfs(r, c+1, visited, heights[r][c])
        dfs(r, c-1, visited, heights[r][c])
    }

    for(let c = 0; c < col; c++){
        dfs(0, c, pac, heights[0][c])
        dfs(row-1, c, alt, heights[row-1][c])
    }

    for(let r = 0; r < row; r++){
        dfs(r, 0, pac, heights[r][0])
        dfs(r, col-1, alt, heights[r][col-1])
    }

    let res = []
    for(let r = 0; r < row; r++){
        for(let c = 0; c < col; c++){
            if(pac.has(`${r}, ${c}`) && alt.has(`${r}, ${c}`)) res.push([r,c])
        }    
    }
    return res
};
