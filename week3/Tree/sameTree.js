

function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}

var isSameTree = function(p, q) {
    //If both nodes are null,they are same
    if(!p && !q) return true
    //if one is null and other is not
    if(!p || !q) return false
    //If values are not same
    if(p.val !== q.val) return false
    return isSameTree(p.left , q.left) && isSameTree(p.right , q.right)

};


// Define the trees as binary tree nodes
let p = new TreeNode(1, new TreeNode(2), new TreeNode(3));
let q = new TreeNode(1, new TreeNode(2), new TreeNode(3));

console.log(isSameTree(p, q)); // Output: true

let p1 = new TreeNode(1, new TreeNode(2), null);
let q1 = new TreeNode(1, null, new TreeNode(2));

console.log(isSameTree(p1, q1)); // Output: false

let p2 = new TreeNode(1, new TreeNode(2), new TreeNode(1));
let q2 = new TreeNode(1, new TreeNode(1), new TreeNode(2));

console.log(isSameTree(p2, q2)); // Output: false
