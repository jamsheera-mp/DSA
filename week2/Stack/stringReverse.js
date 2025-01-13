

function reverseStringUsingStack(str) {
    // Step 1: Create an empty stack
    let stack = [];
    
    // Step 2: Push all characters of the string onto the stack
    for (let char of str) {
        stack.push(char);
    }
    
    // Step 3: Pop characters from the stack and build the reversed string
    let reversedString = "";
    while (stack.length > 0) {
        reversedString += stack.pop();
    }
    
    return reversedString;
}

// Example usage:
const originalString = "hello world";
const reversedString = reverseStringUsingStack(originalString);
console.log("Original String:", originalString); // Output: hello
console.log("Reversed String:", reversedString); // Output: olleh
