

function TreeNode(val, left = null, right = null){
    this.val = val
    this.left = left
    this.right = right
}

var isSymmetric = function(root) {
    const isMirror = (t1,t2)=>{
        if(!t1 && !t2) return true
        if(!t1 || !t2) return false
        if(t1.val !== t2.val) return false
        return isMirror(t1.left,t2.right) && isMirror(t1.right,t2.left)
    }
    return isMirror(root.left,root.right)
};



const root = new TreeNode(
    1,
    new TreeNode(2, new TreeNode(3), new TreeNode(4)),
    new TreeNode(2, new TreeNode(4), new TreeNode(3))
);
console.log(isSymmetric(root)); // true


//root = [1,2,2,null,3,null,3]

const root1 = new TreeNode(
    1,
    new TreeNode(2, null, new TreeNode(3)),
    new TreeNode(2, null, new TreeNode(3))
);
console.log(isSymmetric(root1)); // false



