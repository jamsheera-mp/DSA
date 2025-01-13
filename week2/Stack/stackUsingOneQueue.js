

class Stack{
    constructor(){
        this.queue = []
    }
    push(e){
        this.queue.push(e)
        for(let i=0;i<this.queue.length-1;i++){
            this.queue.push(this.queue.shift())
        }
    }
    pop(){
        return this.queue.shift()
    }
    peek(){
        return this.queue[0]
    }
    print(){
        console.log(this.queue);
        
    }
}

const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
stack.print(); // Output: [30, 20, 10]
console.log(stack.pop());
stack.print(); // Output: [20, 10]