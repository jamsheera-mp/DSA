

class Graph{
    constructor(){
        this.adjacencyList = {}
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex] = new Set()
        }
    }
   
    addEdge(vertex1,vertex2){
        if(!this.adjacencyList[vertex1]){
            this.addVertex(vertex1)
        }
        if(!this.adjacencyList[vertex2]){
            this.addVertex(vertex2)
        }
        this.adjacencyList[vertex1].add(vertex2)
        this.adjacencyList[vertex2].add(vertex1)

    }
    removeEdge(vertex1,vertex2){
        this.adjacencyList[vertex1]?.delete(vertex2)
        this.adjacencyList[vertex2]?.delete(vertex1)
    }
    removeVertex(vertex){
        if(!this.adjacencyList[vertex]){
            return
        }
        for(let adjacentVertex of this.adjacencyList[vertex]){
            this.removeEdge(vertex,adjacentVertex)
        }
        delete this.adjacencyList[vertex]
    }
    hasEdge(vertex1,vertex2){
        return (
            this.adjacencyList[vertex1].has(vertex2) && 
            this.adjacencyList[vertex2].has(vertex1)
        )
    }
    bfs(start){
        let visited = new Set()
        let queue = [start]
        let result = []

        while(queue.length > 0){
            const vertex = queue.shift()
            if(!visited.has(vertex)){
                visited.add(vertex)
                result.push(vertex)
            }
            for(let neighbour of this.adjacencyList[vertex]){
                if(!visited.has(neighbour)){
                    queue.push(neighbour)
                }
            }
        }
        return result
    }
    dfs(start,visited = new Set(),result = []){
        visited.add(start)
        result.push(start)
        for(let neighbor of this.adjacencyList[start]){
            if(!visited.has(neighbor)){
                this.dfs(neighbor,visited,result)
            }
        }
        return result
    }
    display(){
        for(let vertex in this.adjacencyList){
            console.log(vertex + " -> "+ [...this.adjacencyList[vertex]]);
            
        }
    }
}


const graph = new Graph()
graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'E');
graph.addEdge('D', 'F');
graph.addEdge('E', 'F');

graph.display();

console.log('BFS:', graph.bfs('A')); // Output: BFS: [ 'A', 'B', 'C', 'D', 'E', 'F' ]
console.log('DFS (Iterative):', graph.dfs('A')); // Output: DFS (Iterative): [ 'A', 'C', 'E', 'F', 'D', 'B' ]

