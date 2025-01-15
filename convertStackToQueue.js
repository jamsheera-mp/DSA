class Stack{
    constructor(){
        this.items =[];

    }
    isEmpty(){
        return this.items.length ===0;
    }
    push(value){
     this.items.push(value);// just push there is no fixed size constrain
    }
    pop(){
        if(!this.isEmpty()){
            return this.items.pop();
        }else{
            return "Stack is Empty"
        }
    }
    peek(){
        if(!this.isEmpty()){
            return this.items[this.items.length-1];
        }else{
            return "Stack is Empty"
        }
    }
    display(){
        return this.items;
    }
}

class Queue{
    constructor(){
        this.stack1 =new Stack();
        this.stack2  = new Stack();
    }
    enqueue(value){
        this.stack1.push(value);
    }
    dequeue(){
        if(this.stack2.isEmpty()){
            while(!this.stack1.isEmpty()){
                this.stack2.push(this.stack1.pop())
            }
        }
        return this.stack2.pop()
    }
    peek(){
        if(this.stack2.isEmpty()){
            while(!this.stack1.isEmpty()){
                this.stack2.push(this.stack1.pop())
            }
        }
        return this.stack2.peek()
    }
    isEmpty(){
        return this.stack1.isEmpty() && this.stack2.isEmpty();
    }
    display() { // we don't want to reverse the stack whenever we call this method. so we are creating a shallow copy of the stack2 and reverseing it. so the original one don't get affected.
        return [...[...this.stack2.items].reverse(), ...this.stack1.items]; // Correct display
        //or
        // const stack2Contents = [...this.stack2.items].reverse(); // Correct queue order from stack2
        // const stack1Contents = [...this.stack1.items]; // Remaining elements in stack1
        // return [...stack2Contents, ...stack1Contents]; // Combine in queue order 
    }
   
    
    
}
const queue1 = new Queue();
queue1.enqueue(1);
queue1.enqueue(2);
queue1.enqueue(3);
queue1.enqueue(4);

console.log(queue1.display()); // [1, 2, 3] - Logical queue order