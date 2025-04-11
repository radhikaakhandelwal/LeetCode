/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number} 
 */
var networkDelayTime = function(times, n, k) {
    // [source, target, time]
    let arr = new Array(n+1).fill(Infinity)
    arr[k] = 0

    let adj  = {}
    for(let [source, target, time] of times){
        if(!adj[source]) adj[source] = []
        adj[source].push([target, time])
    }

    let pq = new MinPriorityQueue((x) => x[0])
    pq.enqueue([0,k])

    while(pq.size() > 0){
        let [curDist, curNode] = pq.dequeue()
        // [0, k]
        if(!adj[curNode]) continue
        for(let [node, dist] of adj[curNode]){
            // adj[k] = [[1,1], [3,1]] node, distance
            let d = dist + curDist
            if(d < arr[node]){
                arr[node] = d
                pq.enqueue([d,node])
            }
        }
    }
    let res = 0
for (let i = 1; i <= n; i++) {
    if (arr[i] === Infinity) return -1;
    res = Math.max(res, arr[i]);
}

    return res
};
