// If we strat from somewhere and if we reach any node that has been prev visited, we have a cycle  
// O(V) for visiting each node
// O(E) for visiting each edge
// O(V + E) total

const adj = {
  1: [2, 3],
  2: [1, 5],
  3: [1, 4, 6],
  4: [3],
  5: [2, 7],
  6: [3, 7],
  7: [5, 6]
};

let v = 7

function isCycle(adj, v){
  let vis = new Array(v+1).fill(0)

  function detectCycleDFS(i, parent){    
    
    vis[i] = 1
    let arr = adj[i] 
      
    for(let a of arr){
      if(vis[a] === 0){
        if (detectCycleDFS([a, i])) return true
      } 
      else if(a !== parent) return true
    }
    return false
  }
    
  

  for(let i = 1; i < v + 1; i++){
    if(vis[i] === 0){
      if(detectCycleDFS(i, -1)) return true
      // we send -1 for parent because if the node is not been visted yet means its a new start and does not come from some old node
    }
  }
  return false
}

isCycle(adj, v)
