

class CircularQueue{
    constructor(size){
        this.queue = new Array(size)
        this.size = size
        this.front = -1
        this.rear = -1
    }
    isFull(){
        return (this.rear +1) % this.size === this.front
    }
    isEmpty(){
        return this.front === -1
    }
    enqueue(item){
        if(this.isFull()){
            console.log('queue is full');
            return
        }
        if(this.isEmpty()){
            this.front = 0
            this.rear  = 0
            this.queue[this.rear] = item
        }else{
            this.rear = (this.rear  + 1)% this.size
            this.queue[this.rear] = item
        }
    }
    dequeue(){
       
        if(this.isEmpty()){
            console.log('queue is empty');
            return
        }
        const item = this.queue[this.front]
        if(this.front === this.rear){
            
            this.front = -1
            this.rear = -1
        }else{
            
            this.front =( this.front+1) % this.size   
        }
        return item
    }
    getFront(){
        if (this.isEmpty()) {
            return null;
        }
        return this.queue[this.front]
    }
    getRear(){
        if (this.isEmpty()) {
            return null;
        }
        return this.queue[this.rear];
    }
    display(){
        if (this.isEmpty()) {
            console.log('Queue is empty');
            return;
        }
            let i = this.front
            do{
                console.log(this.queue[i]+ ' ');
                i = (i+1)% this.size
            }while(i !== (this.rear +1)% this.size)
        }
    
}

const circularQueue = new CircularQueue(5)
circularQueue.enqueue(22)
circularQueue.enqueue(23)
circularQueue.enqueue(24)
circularQueue.enqueue(25)
circularQueue.enqueue(26)
circularQueue.enqueue(27)
console.log('front:',circularQueue.getFront());
console.log('rear:',circularQueue.getRear());
circularQueue.display()
circularQueue.dequeue()
console.log('front:',circularQueue.getFront());
console.log('rear:',circularQueue.getRear());
circularQueue.display()
