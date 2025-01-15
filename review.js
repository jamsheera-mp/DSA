

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
   
    isEmpty(){
        return this.size === 0
    }
    peek(){
        if(this.isEmpty()){
            console.log('queue is empty');
            return
        }
        return this.front.data
    }
    
    display(){
        if(this.isEmpty()){
            console.log('queue is empty');
            return
        }else{
            let current = this.front
            let result = ''
            while(current){
                result += current.data+' '
                current = current.next
            }
            console.log('queue:',result.trim());
        }
       
        
    }

}

const queue = new Queue()
queue.enqueue(12)
queue.enqueue(25)
queue.enqueue(47)
queue.enqueue(69)
queue.display()
console.log(queue.isEmpty());
console.log(queue.peek());


queue.dequeue()
queue.display()