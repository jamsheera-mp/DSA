

class Node{
    constructor(data){
        this.data = data
        this.next = null
    }
}
class Queue{
    constructor(){
        this.front = null
        this.rear = null
        this.size = 0
    }
    enqueue(data){
        const newNode = new Node(data)
        if(!this.front){
            this.front = newNode
        }else{
            this.rear.next = newNode
        }
        this.rear = newNode
        this.size++
    }
    dequeue(){
        if(!this.front) return null
        const removed = this.front
        this.front = this.front.next
        if(!this.front) this.rear = null
        this.size--
        return removed.data
    }
    peek(){
        if(!this.front) return null
        return this.front.data

    }
    isEmpty(){
        return this.size === 0
    }
    display() {
        if (this.isEmpty()) {
          console.log("Queue is empty");
          return;
        }
        let current = this.front;
        let result = "";
        while (current) {
          result += current.data + " ";
          current = current.next;
        }
        console.log("Queue:", result.trim());
      }
}

const queue = new Queue()
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
console.log(queue.dequeue());
console.log(queue.peek());
console.log(queue.isEmpty()); 
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.isEmpty());