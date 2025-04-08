/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function(edges) {
    let rank = new Array(edges.length+1).fill(0)
    let parent = new Array(edges.length+1).fill()

    for(let i = 0; i < parent.length; i++){
        parent[i] = i
    }

    function ultiParent(x){
        if(x === parent[x]) return x
        parent[x] = ultiParent(parent[x])
        return parent[x]
    }

    function unionFind(u,v){
        let ultiParU = ultiParent(u)
        let ultiParV = ultiParent(v)

        if(ultiParU === ultiParV) return true

        if(rank[ultiParU] < rank[ultiParV]){
            parent[ultiParU] = ultiParV
        }
        else if(rank[ultiParU] > rank[ultiParV]){
            parent[ultiParV] = ultiParU
        }
        else{
            parent[ultiParV] = ultiParU
            rank[ultiParU]++
        }
        return false
    }

    for(let [a,b] of edges){
        if(unionFind(a,b)) return [a,b]
    }
};
