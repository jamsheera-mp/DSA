
function shortestPathBFS(graph, start, target) {
    let queue = [[start, 0]]; // [node, distance]
    let visited = new Set();
    
    while (queue.length) {
        let [node, dist] = queue.shift();
        if (node === target) return dist; // Found the shortest path
        
        if (!visited.has(node)) {
            visited.add(node);
            for (let neighbor of graph[node]) {
                queue.push([neighbor, dist + 1]);
            }
        }
    }
    return -1; // If no path exists
}

// Example graph (Adjacency List)
let graph = {
    0: [1, 2],
    1: [0, 3, 4],
    2: [0, 4],
    3: [1, 5],
    4: [1, 2, 5],
    5: [3, 4]
};

console.log(shortestPathBFS(graph, 0, 5)); // Output: 3 (0 → 1 → 3 → 5)
