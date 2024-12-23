let stack = [];

function reverseStack(stack) {
    if (stack.length <= 1) return stack;
    let auxStack = []; // Auxiliary stack
    let helperStack = []
    while (stack.length > 0) {
       auxStack.push(stack.pop()); // Move all elements from stack to auxStack
    }
    while (auxStack.length > 0) {
        helperStack.push(auxStack.pop());
    }
    
    // Move back to original stack
    while (helperStack.length > 0) {
        stack.push(helperStack.pop());
    }
    
    return stack
}

stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);

console.log("Stack before reverse:", [...stack]); // Use spread operator to show true stack order
console.log("Top of stack before reverse:", stack[stack.length - 1]);

reverseStack(stack); // Call to reverse the stack

console.log("Stack after reverse:", [...stack]); // Use spread operator to show true stack order
console.log("Top of stack after reverse:", stack[stack.length - 1]);
