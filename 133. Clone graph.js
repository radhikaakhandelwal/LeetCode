/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

// We traverse through all the nodes - n
// We traverse through all the edges - e
// O(N)	Cloning each node once
// O(E)	Iterating through each node's neighbors
// O(N + E)	Because each node and edge is visited exactly once

/**
 * @param {_Node} node
 * @return {_Node}
 */
var cloneGraph = function(node) {
    
    let visited = new Map()

    function dfs(node){

        if(!node) return null

        if(visited.has(node)){
            return visited.get(node)
        }

        let newNode = new Node(node.val)
        visited.set(node, newNode)

        for(let neighbor of node.neighbors){
            newNode.neighbors.push(dfs(neighbor))
        }
        
        return newNode
    }

    // console.log(node)
    return dfs(node)
};

// Use a map to link each new created node to the old node. We dont use a set to keep track of visited because we wouldnt have away to check for newNode as everytime a newNODE 
// would be created and it will go into infinite loop. 
// Create a node and map old node to new. For all neighbors for this node, call dfs function to create nodes and finally push them to neighbors array. 
