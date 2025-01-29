class TreeNode {
    constructor(val = 0, left = null, right = null, count = 0) {
        this.val = val;
        this.left = left;
        this.right = right;
        this.count = count; // Total nodes in subtree
    }
}

var kthSmallest = function(root, k) {
    let count = 0; // Counter to track the number of nodes visited
    let result = null; // Variable to store the k-th smallest value

    const inOrder = (node) => {
        if (!node || result !== null) return; // Base case: null node or already found

        inOrder(node.left); // Traverse the left subtree

        count++; // Visit the current node
        if (count === k) {
            result = node.val; // Found the k-th smallest element
            return;
        }

        inOrder(node.right); // Traverse the right subtree
    };

    inOrder(root);
    return result;
};

// root = [3,1,4,null,2], k = 1
const root = new TreeNode(
    3,
    new TreeNode(1, null, new TreeNode(2)), // Left child: 1 (with right child 2)
    new TreeNode(4) // Right child: 4
);
let k = 1

console.log(kthSmallest(root,k));  //1

// root =[5,3,6,2,4,null,null,1], k = 3
const root1 = new TreeNode(
    5,
    new TreeNode(3,
        new TreeNode(2,
            new TreeNode(1)),
            new TreeNode(4)),
    new TreeNode(6)

)
let k2 = 3
console.log(kthSmallest(root1,k2));

