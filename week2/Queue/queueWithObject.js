
class Queue{
    constructor(){
        this.queue = {}
        this.rear = 0
        this.front = 0
    }

    enqueue(item){
        this.queue[this.rear] = item
        this.rear++
    }
    dequeue(){
        const item = this.queue[this.front]
        delete this.queue[this.front]
        this.front++
        return item
    }
    isEmpty(){
        return this.rear - this.front === 0
    }
    peek(){
        return this.queue[this.front]
    }
    size(){
        return this.rear - this.front
    }
    print(){
        console.log(this.items)
    }
}

const queue = new Queue()
console.log(queue.isEmpty())

queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
console.log(queue.size())
queue.print()
console.log(queue.dequeue())
console.log(queue.peek())
