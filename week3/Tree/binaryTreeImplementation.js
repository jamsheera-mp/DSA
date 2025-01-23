


class Node {
    constructor(value) {
      this.value = value; // Value of the node
      this.left = null;   // Left child
      this.right = null;  // Right child
    }
  }
  
  class BinaryTree {
    constructor() {
      this.root = null; // Root of the tree
    }
  
    // Insert a value into the binary tree
    insert(value) {
      const newNode = new Node(value);
      if (this.root === null) {
        this.root = newNode; // If tree is empty, set the root
        return;
      }
  
      const queue = [this.root];
      while (queue.length) {
        const current = queue.shift();
  
        // Insert the value at the first empty spot (left or right)
        if (!current.left) {
          current.left = newNode;
          return;
        } else {
          queue.push(current.left);
        }
  
        if (!current.right) {
          current.right = newNode;
          return;
        } else {
          queue.push(current.right);
        }
      }
    }
  
    // In-order traversal: Left -> Root -> Right
    inOrderTraversal(node) {
      if (node) {
        this.inOrderTraversal(node.left);
        console.log(node.value);
        this.inOrderTraversal(node.right);
      }
    }
  
    // Pre-order traversal: Root -> Left -> Right
    preOrderTraversal(node) {
      if (node) {
        console.log(node.value);
        this.preOrderTraversal(node.left);
        this.preOrderTraversal(node.right);
      }
    }
  
    // Post-order traversal: Left -> Right -> Root
    postOrderTraversal(node) {
      if (node) {
        this.postOrderTraversal(node.left);
        this.postOrderTraversal(node.right);
        console.log(node.value);
      }
    }
  
    // Print the tree in various orders
    print(order = "in-order") {
      if (order === "in-order") {
        console.log("In-order traversal:");
        this.inOrderTraversal(this.root);
      } else if (order === "pre-order") {
        console.log("Pre-order traversal:");
        this.preOrderTraversal(this.root);
      } else if (order === "post-order") {
        console.log("Post-order traversal:");
        this.postOrderTraversal(this.root);
      } else {
        console.log("Invalid traversal order.");
      }
    }
  }
  
  // Example usage:
  const tree = new BinaryTree();
  tree.insert(10);
  tree.insert(20);
  tree.insert(30);
  tree.insert(40);
  tree.insert(50);
  tree.insert(60);
  
  console.log("Tree Traversals:");
  tree.print("in-order");   // Outputs: 40, 20, 50, 10, 60, 30
  tree.print("pre-order");  // Outputs: 10, 20, 40, 50, 30, 60
  tree.print("post-order"); // Outputs: 40, 50, 20, 60, 30, 10
  