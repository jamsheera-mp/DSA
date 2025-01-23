

function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}

var minDepth = function(root) {
    if (!root) return 0; // Base case: if the tree is empty, depth is 0
    if (!root.left) return 1 + minDepth(root.right); // If left is null, explore right
    if (!root.right) return 1 + minDepth(root.left); // If right is null, explore left
    return 1 + Math.min(minDepth(root.left), minDepth(root.right)); // Both subtrees exist
};

// Example 1
const root1 = new TreeNode(
    3,
    new TreeNode(9),
    new TreeNode(20, new TreeNode(15), new TreeNode(7))
);
console.log(minDepth(root1)); // Output: 2

// Example 2
const root2 = new TreeNode(
    2,
    null,
    new TreeNode(3, null, new TreeNode(4, null, new TreeNode(5, null, new TreeNode(6))))
);
console.log(minDepth(root2)); // Output: 5
