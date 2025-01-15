

class Queue {
    constructor() {
        this.queue = []; // Array to store the elements of the queue
        this.front = 0;  // Points to the front of the queue
        this.rear = 0;   // Points to the rear of the queue
    }

    // Enqueue: Adds an element to the rear of the queue
    enqueue(item) {
        this.queue[this.rear] = item;
        this.rear++;
    }

    // Dequeue: Removes and returns the element at the front of the queue
    dequeue() {
        if (this.isEmpty()) {
            console.log("Queue is empty");
            return null;
        }
        const item = this.queue[this.front];
        this.front++;
        return item;
    }

    // Peek: Returns the front element without removing it
    peek() {
        if (this.isEmpty()) {
            console.log("Queue is empty");
            return null;
        }
        return this.queue[this.front];
    }

    // isEmpty: Checks if the queue is empty
    isEmpty() {
        return this.front === this.rear;
    }

    // Display: Shows the current elements in the queue
    display() {
        if (this.isEmpty()) {
            console.log("Queue is empty");
        } else {
            console.log("Queue elements:", this.queue.slice(this.front, this.rear));
        }
    }
}

// Example usage
const queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.display(); // Output: Queue elements: [10, 20, 30]
console.log(queue.peek()); // Output: 10
console.log(queue.dequeue()); // Output: 10
queue.display(); // Output: Queue elements: [20, 30]
console.log(queue.isEmpty()); // Output: false
console.log(queue.dequeue()); // Output: 20
console.log(queue.dequeue()); // Output: 30
console.log(queue.dequeue()); // Output: Queue is empty, null
queue.display(); // Output: Queue is empty
