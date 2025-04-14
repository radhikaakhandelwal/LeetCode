/**
 * @param {number[][]} points
 * @return {number}
 */

// For each node added to the MST, the distance to all other unvisited nodes: n nodes × up to n distances = O(n²) total distance calculations

// There are n nodes, so up to n enqueue/dequeue operations. Each heap operation: O(log n)
// Total heap operations: O(n log n)

// So the final time complexity is: O(n² + n log n) =  O(n²)

var minCostConnectPoints = function(points) {
    let visited = new Set()
    let sum = 0
    let q = new MinPriorityQueue((x)=> x[0])
    q.enqueue([0,0])
    let minDist = new Array(points.length).fill(Infinity)

    while(visited.size < points.length){
        let [wt, node] = q.dequeue()

        if(!visited.has(node)){
            visited.add(node)
            sum += wt
            
            for (let i = 0; i < points.length; i++) {
                if(!visited.has(i)){
                    let dist = Math.abs(points[i][0] - points[node][0]) + Math.abs(points[i][1] - points[node][1]);
                    if(dist < minDist[i]){
                        minDist[i] = dist;
                        q.enqueue([dist, i]);
                    }
                    
                }
            }
        }

    }

    return sum
};

// [[0,0],[2,2],[3,10],[5,2],[7,0]]
//    0     1     2       3     4   
