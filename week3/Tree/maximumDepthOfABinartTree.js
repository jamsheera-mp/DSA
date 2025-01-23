

function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}

var maxDepth = function(root) {
    if (!root) return 0; // Base case: if the tree is empty, depth is 0
    const leftDepth = maxDepth(root.left); // Recurse on the left subtree
    const rightDepth = maxDepth(root.right); // Recurse on the right subtree
    return 1 + Math.max(leftDepth, rightDepth); // Add 1 for the current node
};

// Example 1
const root1 = new TreeNode(
    3,
    new TreeNode(9),
    new TreeNode(20, new TreeNode(15), new TreeNode(7))
);
console.log(maxDepth(root1)); // Output: 3

// Example 2
const root2 = new TreeNode(
    1,
    null,
    new TreeNode(2)
);
console.log(maxDepth(root2)); // Output: 2
