function TreeNode(val, left = null, right = null){
    this.val = val
    this.left = left
    this.right = right
}

var kthSmallest = function(root, k) {
    let result = null
    let count = 0

    var inorder = (node)=>{
        if(!node ||  result !== null) return

        inorder(node.left)
        count++

        if(count === k){
            result = node.val
            return
        }

        inorder(node.right)
    }

    inorder(root)
    return result
}


//root = [3,1,4,null,2], k = 1
let root = new TreeNode(3,
    new TreeNode(1,null,new TreeNode(2)),
    new TreeNode(4)
)

console.log(kthSmallest(root,k=1));


//[5,3,6,2,4,null,null,1], k = 3
let root1 = new TreeNode(5,
    new TreeNode(3,new TreeNode(2,new TreeNode(1),null),new TreeNode(4)),
    new TreeNode(6)
)
console.log(kthSmallest(root1,k=3));
