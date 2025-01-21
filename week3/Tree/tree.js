
// Define a TreeNode class
class TreeNode {
    constructor(value) {
      this.value = value;     // Value of the node
      this.children = [];     // Array to hold the children nodes
    }
  
    // Add a child node
    addChild(child) {
      this.children.push(child);
    }
  }
  
  // Define a Tree class
  class Tree {
    constructor(value) {
      this.root = new TreeNode(value); // Initialize the root of the tree
    }
  
    // Perform Depth-First Search (DFS) traversal
    dfs(node, visit) {
      if (node) {
        visit(node); // Perform some operation on the current node
        for (let child of node.children) {
          this.dfs(child, visit); // Recur for each child
        }
      }
    }
  
    // Perform Breadth-First Search (BFS) traversal
    bfs(visit) {
      const queue = [this.root]; // Start with the root node in the queue
      while (queue.length > 0) {
        const current = queue.shift(); // Dequeue the first node
        visit(current); // Perform some operation on the current node
        for (let child of current.children) {
          queue.push(child); // Enqueue all children of the current node
        }
      }
    }
  }
  
  // Example usage:
  // Create a tree with the root value
  const tree = new Tree("A");
  
  // Add children to the root
  const nodeB = new TreeNode("B");
  const nodeC = new TreeNode("C");
  const nodeD = new TreeNode("D");
  tree.root.addChild(nodeB);
  tree.root.addChild(nodeC);
  tree.root.addChild(nodeD);
  
  // Add children to node B
  nodeB.addChild(new TreeNode("E"));
  nodeB.addChild(new TreeNode("F"));
  
  // Add a child to node C
  nodeC.addChild(new TreeNode("G"));
  
  // Add children to node D
  nodeD.addChild(new TreeNode("H"));
  nodeD.addChild(new TreeNode("I"));
  nodeD.addChild(new TreeNode("J"));
  
  // Depth-First Search traversal
  console.log("DFS Traversal:");
  tree.dfs(tree.root, (node) => console.log(node.value));
  
  // Breadth-First Search traversal
  console.log("BFS Traversal:");
  tree.bfs((node) => console.log(node.value));
  