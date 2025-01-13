
class Queue{
    constructor(){
        this.items  = []
    }
    enqueue(element){
        this.items.push(element)
    }   
    dequeue(){
        if(this.items.length === 0){
            console.log( "queue is empty,can not perform dequeue ")
            return null
        }
        return this.items.shift()
    }
    isEmpty(){
        return this.items.length === 0
    }
    peek(){
        if(!this.isEmpty()){
            return this.items[0]
        }
        return null
    }
    size(){
        return this.items.length
    }
    print(){
        let queueString = ""
        for(let i=0;i<this.size();i++){
            queueString += this.items[i] + " "
            }
        console.log("Queue:"+queueString)
    }
}

const queue = new Queue()
console.log(queue.isEmpty())
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)

queue.print()
console.log(queue.dequeue())
console.log(queue.peek())
console.log(queue.size())
queue.print()