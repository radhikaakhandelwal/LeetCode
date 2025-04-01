// O(V) for visiting each node
// O(E) for visiting each edge
// O(V + E) total

const adj = {
  1: [2, 3],
  2: [1, 5],
  3: [1, 4, 5],
  4: [3],
  5: [2, 7],
  6: [3, 7],
  7: [5, 6]
};

let v = 7

function isCycle(adj, v){
  let queue = []
  let vis = new Array(v+1).fill(0)

  function detectCycle(i, parent){    
    queue.push([i, parent])

    while(queue.length > 0){      
      
      let [idx, par] = queue.shift() 
      vis[idx] = 1
      
      let arr = adj[idx] 

      for(let a of arr){
        if(vis[a] === 0) queue.push([a, idx])
        else if(a !== par) return true
      }
      
    }
    return false
  }

  for(let i = 1; i < v+1; i++){
    if(vis[i] === 0){
      if(detectCycle(i, -1)) return true
      // we send -1 for parent because if the node is not been visted yet means its a new start and does not come from some old node
    }
  }
  return false
}

detectCycle(adj, v)
