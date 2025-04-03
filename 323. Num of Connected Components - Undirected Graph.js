class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {
        let adj = new Array(n).fill().map(() => [])
        let vis = new Array(n).fill(0)

        for(let [a,b] of edges){
            adj[a].push(b)
            adj[b].push(a)
        }

        function dfs(i){
            vis[i] = 1

            for(let a of adj[i]){
                if(vis[a] === 0) dfs(a)
            }
        }

        let count = 0
        for(let i = 0; i < n; i++){
            if(vis[i] === 0){
                count++
                dfs(i)
            }
        }
        return count
    }
}
