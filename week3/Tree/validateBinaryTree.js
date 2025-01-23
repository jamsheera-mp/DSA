class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    // Method to insert a value into the binary tree (helper)
    insert(value) {
        const newNode = new Node(value);
        if (!this.root) {
            this.root = newNode;
            return;
        }
        let current = this.root;
        while (true) {
            if (value < current.value) {
                if (!current.left) {
                    current.left = newNode;
                    return;
                }
                current = current.left;
            } else {
                if (!current.right) {
                    current.right = newNode;
                    return;
                }
                current = current.right;
            }
        }
    }
}

// Function to validate if the tree is a BST
function isBST(node, min = -Infinity, max = Infinity) {
    if (node === null) return true; // An empty tree is a BST
    if (node.value <= min || node.value >= max) return false;

    // Recursively validate left and right subtrees
    return isBST(node.left, min, node.value) && isBST(node.right, node.value, max);
}

// Example Usage
const tree = new BinaryTree();
tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(3);
tree.insert(7);
tree.insert(12);
tree.insert(18);
console.log(tree);

console.log(isBST(tree.root)); // Output: true (if the tree is a BST)
