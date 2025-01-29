// Node class to represent each node in the tree
class TreeNode {
    constructor(value) {
        this.value = value;       // Value of the node
        this.children = [];       // Array to store children nodes
    }

    // Add a child node
    addChild(childNode) {
        this.children.push(childNode);
    }
}

// Tree class to represent the whole tree
class Tree {
    constructor(rootValue) {
        this.root = new TreeNode(rootValue); // Root node of the tree
    }

    // Depth-First Traversal
    depthFirstTraversal(node = this.root) {
        if (!node) return;
        console.log(node.value); // Process the current node
        for (let child of node.children) {
            this.depthFirstTraversal(child); // Recursive call for each child
        }
    }

    // Breadth-First Traversal
    breadthFirstTraversal() {
        const queue = [this.root]; // Initialize a queue with the root node
        while (queue.length > 0) {
            const currentNode = queue.shift(); // Dequeue the first node
            console.log(currentNode.value);    // Process the current node
            for (let child of currentNode.children) {
                queue.push(child); // Enqueue all children
            }
        }
    }

    // Print the tree structure (Recursive)
    printTree(node = this.root, depth = 0) {
        if (!node) return;
        console.log(" ".repeat(depth * 2) + node.value); // Indent based on depth
        for (let child of node.children) {
            this.printTree(child, depth + 1); // Recursive call for each child
        }
    }
}

// Example Usage:
// Creating the tree
const myTree = new Tree("Root");

// Adding children to the root
const child1 = new TreeNode("Child 1");
const child2 = new TreeNode("Child 2");
myTree.root.addChild(child1);
myTree.root.addChild(child2);

// Adding grandchildren to Child 1
child1.addChild(new TreeNode("Grandchild 1.1"));
child1.addChild(new TreeNode("Grandchild 1.2"));

// Adding grandchildren to Child 2
child2.addChild(new TreeNode("Grandchild 2.1"));

// Traversing and Printing
console.log("Depth-First Traversal:");
myTree.depthFirstTraversal();

console.log("\nBreadth-First Traversal:");
myTree.breadthFirstTraversal();

console.log("\nTree Structure:");
myTree.printTree();
