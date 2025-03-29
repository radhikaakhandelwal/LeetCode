// The logic is that every time a new call to the helper function is made (that is, every time a traversal occurs - dfs)
// a new province starts. All nodes in a single provice can be traversed in a single call.
// So everytime a new call is made we increase the count - start of new province.

var findCircleNum = function(isConnected) {
    let count = 0
    let nodes = isConnected.length
    let visited = new Array(nodes).fill(0) 

    function helper(n){

        visited[n] = 1
        let arr = isConnected[n]

        for(let a = 0; a < arr.length; a++){
            if(arr[a] === 1 && visited[a] === 0) helper(a) 
        } 

    }

    for(let i = 0; i < nodes; i++){
        if(visited[i] === 0){
            count++
            helper(i)
        }
    }
    
    return count
};

//    0 1 2
// 0 [1,1,0]
// 1 [1,1,0]
// 2 [0,0,1]
