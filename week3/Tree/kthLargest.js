
var kthLargest = function(root, k) {
    let result = null;
    let count = 0;

    const reverseInorder = (node) => {
        if (!node || result !== null) return;

        reverseInorder(node.right); // Traverse right first (largest values)
        count++;

        if (count === k) {
            result = node.val;
            return;
        }

        reverseInorder(node.left); // Then traverse left (smaller values)
    };

    reverseInorder(root);
    return result;
};
class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

// Example BST
let root = new TreeNode(5);
root.left = new TreeNode(3);
root.right = new TreeNode(7);
root.left.left = new TreeNode(2);
root.left.right = new TreeNode(4);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(8);

console.log(kthLargest(root, 2)); // Output: 7 (2nd largest element)
console.log(kthLargest(root, 4)); // Output: 5 (4th largest element)
console.log(kthLargest(root, 6)); // Output: 3 (6th largest element)
