

function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}

var inorderTraversal = function(root) {
    const result = []
    function traverse(node){
      if(!node) return
      traverse(node.left)
      result.push(node.val)
      traverse(node.right)
    }
    traverse(root)
    return result
  };

  let root = new TreeNode(1, new TreeNode(2), new TreeNode(3));
  console.log(inorderTraversal(root));
  