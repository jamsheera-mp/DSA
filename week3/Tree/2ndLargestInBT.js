var findSecondLargest = function(root) {
    let firstLargest = null;
    let secondLargest = null;

    const traverse = (node) => {
        if (!node) return;

        // Visit right subtree first
        traverse(node.right);

        // Process current node
        if (firstLargest === null) {
            firstLargest = node.val;
        } else if (node.val < firstLargest) {
            if (secondLargest === null || node.val > secondLargest) {
                secondLargest = node.val;
            }
        }

        // Visit left subtree
        traverse(node.left);
    };

    traverse(root);
    return secondLargest;
};
class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

// Example Binary Tree
let root = new TreeNode(5);
root.left = new TreeNode(3);
root.right = new TreeNode(7);
root.left.left = new TreeNode(2);
root.left.right = new TreeNode(4);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(8);

console.log(findSecondLargest(root)); // Output: 7
