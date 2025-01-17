class Stack {
    constructor() {
        this.queue1 = [];
        this.queue2 = [];
    }

    push(e) {
        this.queue1.push(e);
    }

    pop() {
        if (this.queue1.length === 0) {
            return null;
        }

        // Move all elements except last to queue2
        while (this.queue1.length > 1) {
            this.queue2.push(this.queue1.shift());
        }

        // Get the last element
        const popped = this.queue1.shift();

        // Swap queues
        [this.queue1, this.queue2] = [this.queue2, []];

        return popped;
    }

    peek() {
        if (this.queue1.length === 0) {
            return null;
        }

        // Move all elements except last to queue2
        while (this.queue1.length > 1) {
            this.queue2.push(this.queue1.shift());
        }

        // Get the last element but don't remove it
        const topElement = this.queue1.shift();
        
        // Put the top element in queue2
        this.queue2.push(topElement);

        // Swap queues
        [this.queue1, this.queue2] = [this.queue2, []];

        return topElement;
    }

    isEmpty() {
        return this.queue1.length === 0;
    }

    size() {
        return this.queue1.length;
    }

    print() {
        if (this.isEmpty()) {
            console.log('Stack is empty');
            return;
        }
        console.log('Stack elements:', this.queue1);
    }
}

// Test the implementation
const stack = new Stack();
stack.push(18);
stack.push(25);

stack.print();  // Stack elements: [18, 25]
console.log('Top element:', stack.peek());  // Top element: 25
console.log('Popped element:', stack.pop());  // Popped element: 25
stack.print();  // Stack elements: [18]