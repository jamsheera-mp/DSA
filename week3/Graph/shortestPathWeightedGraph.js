
class MinHeap {
    constructor() {
        this.heap = [];
    }

    push([node, cost]) {
        this.heap.push([node, cost]);
        this.heap.sort((a, b) => a[1] - b[1]); // Sort by cost
    }

    pop() {
        return this.heap.shift(); // Remove and return the smallest element
    }

    isEmpty() {
        return this.heap.length === 0;
    }
}

function dijkstra(graph, start, target) {
    let minHeap = new MinHeap();
    let distances = {};
    
    for (let node in graph) {
        distances[node] = Infinity;
    }
    
    distances[start] = 0;
    minHeap.push([start, 0]);

    while (!minHeap.isEmpty()) {
        let [node, cost] = minHeap.pop();

        if (node === target) return cost; // Reached the target

        for (let [neighbor, weight] of graph[node]) {
            let newCost = cost + weight;
            if (newCost < distances[neighbor]) {
                distances[neighbor] = newCost;
                minHeap.push([neighbor, newCost]);
            }
        }
    }
    return -1; // If no path exists
}

// Example weighted graph (Adjacency List)
let weightedGraph = {
    0: [[1, 4], [2, 1]],
    1: [[3, 1]],
    2: [[1, 2], [3, 5]],
    3: []
};

console.log(dijkstra(weightedGraph, 0, 3)); // Output: 3 (0 → 2 → 1 → 3)
