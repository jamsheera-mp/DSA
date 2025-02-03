class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

var findThirdLargest = function(root) {
    if (!root) return null;

    let first = -Infinity;
    let second = -Infinity;
    let third = -Infinity;

    const traverse = (node) => {
        if (!node) return;

        if (node.val > first) {
            third = second;
            second = first;
            first = node.val;
        } else if (node.val > second && node.val < first) {
            third = second;
            second = node.val;
        } else if (node.val > third && node.val < second) {
            third = node.val;
        }

        traverse(node.left);
        traverse(node.right);
    };

    traverse(root);
    return third === -Infinity ? null : third;
};
// Example Binary Tree
let root = new TreeNode(5);
root.left = new TreeNode(3);
root.right = new TreeNode(7);
root.left.left = new TreeNode(2);
root.left.right = new TreeNode(4);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(8);
console.log(findThirdLargest(root)); // Output: 6 (3rd largest)
