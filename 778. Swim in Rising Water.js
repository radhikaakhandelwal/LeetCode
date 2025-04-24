/**
 * @param {number[][]} grid
 * @return {number}
 */

// Maximum heap size = Number of nodes = (n²)
// Each heap operation (insert/remove) costs: O(log(n²)) = O(2 * log n) = O(log n) 

// n² total heap operations × O(log n) per operation  = O(n² log n)  

var swimInWater = function(grid) {
    const n = grid.length;
    const visited = new Set();
    const pq = new MinPriorityQueue( x => x[0]); // [elevation, row, col]
    
    pq.enqueue([grid[0][0], 0, 0]);
    visited.add('0,0');

    const directions = [[1,0], [-1,0], [0,1], [0,-1]];

    while (!pq.isEmpty()) {
        const [elev, r, c] = pq.dequeue();

        if (r === n - 1 && c === n - 1) return elev;

        for (let [dr, dc] of directions) {
            const nr = r + dr;
            const nc = c + dc;

            if (nr >= 0 && nr < n && nc >= 0 && nc < n && !visited.has(`${nr},${nc}`)) {
                visited.add(`${nr},${nc}`);
                pq.enqueue([Math.max(elev, grid[nr][nc]), nr, nc]);
            }
        }
    }
};
