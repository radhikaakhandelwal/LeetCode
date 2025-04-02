//check for cycles in an undirected graph - DFS
// Check if you can visited all nodes in one traversal

class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {
        let visited = new Array(n).fill(0)
        let adj = new Array(n).fill().map(() => [])

        for(let [a,b] of edges){
            adj[a].push(b)
            adj[b].push(a)
        }

        function helper(idx, parent){
            visited[idx] = 1

            let arr = adj[idx]
            for(let a of arr){
                if(visited[a] === 0){
                    if(helper(a, idx)) return true
                }
                else if(a !== parent) return true
            }
            return false
        }

        if(helper(0, -1)) return false

        for(let v of visited){
            if(v === 0) return false
        }
        return true
    }
}
