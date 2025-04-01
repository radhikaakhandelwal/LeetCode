const adj = {
  1: [2],
  2: [3],
  3: [4, 7],
  4: [5],
  5: [6],
  6: [],
  7: [5],
  8: [2,  9],
  9: [10],
  10: [8]
};

let v = 10

function isCycle(adj, v){
  let vis = new Array(v+1).fill(0)
  let visPath = new Array(v+1).fill(0)
  
  function detectCycleDFS(i){ 
    
    visPath[i] = 1
    vis[i] = 1
      
    let arr = adj[i] 

    for(let a of arr){
      if(vis[a] === 0){
        if (detectCycleDFS(a)) return true;
      }  
      else if(vis[a] === 1 && visPath[i] === 1) return true 
    }
    visPath[i] = 0 
    return false
  }

  for(let i = 1; i < v+1; i++){
    if(vis[i] === 0){
      if(detectCycleDFS(i)) return true
    }
  }
  return false
}

detectCycle(adj, v)
