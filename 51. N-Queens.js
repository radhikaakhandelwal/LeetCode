// for every column{
//     i am checking every row from 0 till n-1{
//         in every row i check if i can place queen
//         if i can place queen i move to next col and repeat - recursion
//         then backtrack
//     }
// }

/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    let res = []
    let board = new Array(n).fill().map(() => new Array(n).fill('.'));

    function helper(col){
        if(col === n){
            res.push(board.map(row => row.join('')))
            return
        }
        for(let r = 0; r < n; r++){
            if(isSafe(r,col,board,n)){
                board[r][col] = 'Q'
                helper(col+1)
                board[r][col] = '.'
            }

            
        }
    }

    helper(0)
    return res
};

function isSafe(row,col,board,n){
    let dupeROw = row
    let dupeCol = col

    while(row >= 0 && col >= 0){
        if(board[row][col] === 'Q') return false
        row--
        col--
    }

    row =  dupeROw 
    col =  dupeCol 

    while(col >= 0){
        if(board[row][col] === 'Q') return false
        col--
    }

    row =  dupeROw 
    col =  dupeCol 

    while(row < n && col >= 0){
        if(board[row][col] === 'Q') return false
        col--
        row++
    }
    return true
}
