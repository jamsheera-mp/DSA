

class Node {
    constructor(data){
        this.data = data
        this.next = null
    }
}
class Stack{
    constructor(){
        this.head = null
    }
    isEmpty(){
        return this.head === null
    }
    push(data){
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
    }
    pop(){
        if (this.isEmpty()) {
            console.log("stack is empty");
            return null; 
        }
        const temp = this.head;
        this.head = this.head.next;
        return temp.data;
    }
    peek(){
        if (this.isEmpty()) {
            console.log("stack is empty");
            return null; 
        }
        return this.head.data;
    }
    print() {
        if (this.isEmpty()) {
            console.log("Stack is empty");
        } else {
            let current = this.head;
            const elements = [];
            while (current) {
                elements.push(current.data);
                current = current.next;
            }
            console.log("stack elements:", elements.join(", "));
        }
    }
}
const stack = new Stack();
stack.push(1);
stack.push(10);
stack.push(23);
stack.print();
console.log(stack.peek()); // Output: 23
console.log('popped element 1',stack.pop())
console.log('popped element 2',stack.pop())
console.log('popped element 3',stack.pop())
stack.pop();
stack.pop();


console.log(stack.peek()); // Output: "stack is empty", null
stack.print();