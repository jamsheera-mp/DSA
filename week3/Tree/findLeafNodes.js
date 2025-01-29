

findLeafNodes(Node = this.root, leaves = []) {
    if (Node) {
        if (!Node.left && !Node.right) {
            leaves.push(Node.value);
        }
        this.findLeafNodes(Node.left, leaves);
        this.findLeafNodes(Node.right, leaves);
    }
    return leaves;
}