/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */

// The intuition is to use topological sort 
// If successful then return the sorted array we created by traversing
// res.length !== numCourses means that theres still some elements left in inorder whose income edge has not become 0
// Building the Adjacency List - O(E)
// Initializing the Queue - O(V)
//  BFS - O(V + E)

var findOrder = function(numCourses, prerequisites) {
    let inOrder = new Array(numCourses).fill(0)
    let adj = new Array(numCourses).fill(null).map(() => []);

    for(let [c, p] of prerequisites){
        inOrder[c]++
        adj[p].push(c)
    }

    let queue = []
    for(let i = 0; i < inOrder.length; i++){
        if(inOrder[i] === 0) queue.push(i)
    }

    let res = []
    while(queue.length > 0){
        let cur = queue.pop()
        for(let a of adj[cur]){
            inOrder[a]--
            if(inOrder[a] === 0) queue.push(a)
        }
        res.push(cur)
    }
    return res.length === numCourses ? res : []
};
