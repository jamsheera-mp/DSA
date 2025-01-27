class TreeNode{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST{
    constructor(){
        this.root = null;
    }

    insert(value){
        let node = new TreeNode(value);
        if(this.root === null){
            this.root = node;
            return this;
        }
        let temp = this.root;
        while(true){
            if(node.value === temp.value) return undefined;
            if(node.value<temp.value){
                if(temp.left === null){
                    temp.left = node;
                    return this;
                }
                temp = temp.left;
            }else{
                if(temp.right == null){
                    temp.right = node;
                    return this;
                }
                temp = temp.right;
            }
        }
    }
    // Inorder Traversal: Left -> Root -> Right
    inorder() {
        const result = [];
        const traverse = (node) => {
            if (node !== null) {
                traverse(node.left);
                result.push(node.value);
                traverse(node.right);
            }
        };
        traverse(this.root);
        return result;
    }

    // Preorder Traversal: Root -> Left -> Right
    preorder() {
        const result = [];
        const traverse = (node) => {
            if (node !== null) {
                result.push(node.value);
                traverse(node.left);
                traverse(node.right);
            }
        };
        traverse(this.root);
        return result;
    }

    // Postorder Traversal: Left -> Right -> Root
    postorder() {
        const result = [];
        const traverse = (node) => {
            if (node !== null) {
                traverse(node.left);
                traverse(node.right);
                result.push(node.value);
            }
        };
        traverse(this.root);
        return result;
    }
     // Recursive Search
     searchRecursive(value) {
        const searchNode = (node) => {
            if (node === null) return false; // Base case: Not found
            if (node.value === value) return true; // Value found
            if (value < node.value) {
                return searchNode(node.left); // Search in left subtree
            } else {
                return searchNode(node.right); // Search in right subtree
            }
        };
        return searchNode(this.root);
    }

    // Iterative Search
    searchIterative(value) {
        let temp = this.root;
        while (temp !== null) {
            if (value === temp.value) return true; // Value found
            if (value < temp.value) {
                temp = temp.left; // Move to left subtree
            } else {
                temp = temp.right; // Move to right subtree
            }
        }
        return false; // Value not found
    }
     // Level Order Traversal (Breadth-First Search)
     levelOrder() {
        const result = [];
        const queue = [];
        if (this.root !== null) {
            queue.push(this.root);
        }

        while (queue.length > 0) {
            let currentNode = queue.shift(); // Dequeue the front node
            result.push(currentNode.value);

            // Enqueue left and right children if they exist
            if (currentNode.left !== null) {
                queue.push(currentNode.left);
            }
            if (currentNode.right !== null) {
                queue.push(currentNode.right);
            }
        }

        return result;
    }

}
let bt = new BST();
bt.insert(10);
bt.insert(20);
bt.insert(30);
console.log(bt)