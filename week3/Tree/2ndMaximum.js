

findSecondLargest() {
    if (!this.root || (!this.root.left && !this.root.right)) {
        return null; 
    }

    let current = this.root;
    let parent = null;

    while (current.right !== null) {
        parent = current;
        current = current.right;
    }

 
    if (current.left !== null) {
        current = current.left;
     
        while (current.right !== null) {
            current = current.right;
        }
        return current.value;
    }

           return parent.value;
}