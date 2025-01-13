/* 
class Queue {
    constructor() {
        this.stack1 = []; // Stack for push operations
        this.stack2 = []; // Stack for pop and peek operations
    }

    push(item) {
        this.stack1.push(item); // Push directly into stack1
    }

    pop() {
        if (this.stack2.length === 0) { // If stack2 is empty, transfer elements from stack1
            while (this.stack1.length > 0) {
                this.stack2.push(this.stack1.pop());
            }
        }
        return this.stack2.pop(); // Pop the top element from stack2
    }

    peek() {
        if (this.stack2.length === 0) { // If stack2 is empty, transfer elements from stack1
            while (this.stack1.length > 0) {
                this.stack2.push(this.stack1.pop());
            }
        }
        return this.stack2[this.stack2.length - 1]; // Return the top element of stack2
    }

    isEmpty() {
        return this.stack1.length === 0 && this.stack2.length === 0; // Check both stacks
    }

    display() {
        // Combine both stacks to display the full queue
        const combinedQueue = [...this.stack2].reverse().concat(this.stack1);
        console.log("Queue elements:", combinedQueue);
    }
}

// Example Usage:
const queue = new Queue();
console.log(queue.isEmpty()); // true
queue.push(10);
queue.push(20);
queue.push(30);
queue.display(); // Queue elements: [10, 20, 30]
console.log(queue.peek()); // 10
queue.pop(); // Removes 10
queue.display(); // Queue elements: [20, 30]
 */

class Queue{
    constructor(){
        this.stack1 = []
        this.stack2 = []
    }
    push(e){
        this.stack1.push(e)
    }
    pop(){
        if(this.stack2.length===0){
            while(this.stack1.length>0){
                this.stack2.push(this.stack1.pop())
            }
        }
        return this.stack2.pop()
    }
    peek(){
        if(this.stack2.length===0){
            while(this.stack1.length>0){
                this.stack2.push(this.stack1.pop())
            }
        }
        return this.stack2[this.stack2.length-1]
    }
    isEmpty(){
        return this.stack1.lenth === 0 && this.stack2.length === 0
    }
    print(){
        const combinedQueue = [...this.stack2].reverse().concat(this.stack1)
        console.log('queue:',combinedQueue);
        
      }
      display() {
        // Combine stack2 and reversed stack1
        const result = [...this.stack2, ...this.stack1.slice().reverse()];
        console.log(result);
        return result;
    }
}
const queue = new Queue();
console.log(queue.isEmpty()); // true
queue.push(10);
queue.push(20);
queue.push(30);
queue.print(); // Queue elements: [10, 20, 30]
console.log(queue.peek()); // 10
queue.pop(); // Removes 10
queue.print(); // Queue elements: [20, 30]
console.log(queue.pop())
queue.push(55)
queue.print();
console.log(queue.pop())