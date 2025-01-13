

class Stack{
    constructor(maxSize){
        this.stack = []
        this.maxSize = maxSize
    }
    push(e){
        if(this.isFull()){
            console.log("stack is full,can not add more elements")
            return null
        }
        this.stack.push(e)
    }
    isFull(){
        return this.stack.length === this.maxSize
    }
    isEmpty(){
        return this.stack.length === 0
    }
    pop(){
        if(this.isEmpty()){
            console.log("Stack is empty")
            return null
        }
        return this.stack.pop()
    }
    peek(){
        if(this.isEmpty()){
            console.log("Stack is empty")
            return null
        }
        return this.stack[this.stack.length - 1]
    }
    print(){
        if(this.isEmpty()){
            console.log('Stack is empty');
        }else{
            console.log('stack elements:',this.stack.join(", "));    
        }
    }
}

const myStack = new Stack(3)



myStack.push(10)
myStack.push(20)
myStack.push(30)
myStack.push(40)
myStack.print()
console.log(myStack.peek());


console.log(myStack.peek());

myStack.print()
console.log(myStack.isEmpty());

console.log(myStack.peek());
console.log(myStack.pop());

myStack.print()

console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack.pop());


