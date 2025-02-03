
//in bst

function closestValue(root, target) {
    let closest = root.val;

    while (root) {
        // Update closest if the current node is closer to the target
        if (Math.abs(root.val - target) < Math.abs(closest - target)) {
            closest = root.val;
        }

        // Move left if target is smaller, right if larger
        root = target < root.val ? root.left : root.right;
    }
    
    return closest;
}


function closestValueRecursion(root, target, closest = root.val) {
    if (!root) return closest;

    // Update closest if the current node is closer
    if (Math.abs(root.val - target) < Math.abs(closest - target)) {
        closest = root.val;
    }

    // Move left or right
    if (target < root.val) {
        return closestValue(root.left, target, closest);
    } else {
        return closestValue(root.right, target, closest);
    }
}


let root = {
    val: 8,
    left: { val: 5, left: { val: 3, left: null, right: null }, right: { val: 6, left: null, right: null } },
    right: { val: 12, left: null, right: { val: 15, left: null, right: null } }
};

console.log(closestValue(root, 7));  // Output: 6
console.log(closestValue(root, 10)); // Output: 8
console.log(closestValue(root, 14)); // Output: 12


//not bst,normal BT
function closestValueNonBST(root, target) {
    let closest = root.val;

    function dfs(node) {
        if (!node) return;

        if (Math.abs(node.val - target) < Math.abs(closest - target)) {
            closest = node.val;
        }

        dfs(node.left);
        dfs(node.right);
    }

    dfs(root);
    return closest;
}

console.log(closestValueNonBST(root,6));
