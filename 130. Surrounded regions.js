/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
    let row = board.length
    let col = board[0].length

    function dfs(i, j){
        if(i < 0 || j < 0 || i === row || j === col || board[i][j] !== 'O') return 
        board[i][j] = '*'

        dfs(i+1, j)
        dfs(i-1,j)
        dfs(i, j+1)
        dfs(i, j -1)
    }

    for(let r = 0; r < row; r++){
        if(board[r][0] === 'O') dfs(r,0)
        if(board[r][col-1] === 'O') dfs(r,col-1)
    }

    for(let c = 0; c < col; c++){
        if(board[0][c] === 'O') dfs(0, c)
        if(board[row-1][c] === 'O') dfs(row-1, c)
    }
    
    for(let r = 0; r < row; r++){
        for(let c = 0; c < col; c++){
            if(board[r][c] === '*') board[r][c] = 'O'
            else if(board[r][c] === 'O') board[r][c] = 'X'
        }
    }

    
};
