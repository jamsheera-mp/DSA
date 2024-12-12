

class Stack{
    constructor(){
        this.stack = []
    }
    push(e){
        this.stack.push(e)
    }
    size(){
        return this.stack.length
    }
    isEmpty(){
        return this.stack.length === 0
    }
    pop(){
        if(this.isEmpty()){
            return "Stack is empty"
        }
        return this.stack.pop()
    }
    peek(){
        if(this.isEmpty()){
            return "Stack is empty"
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

const myStack = new Stack()
console.log(myStack.size());


myStack.push(10)
console.log(myStack.peek());
myStack.push(20)

console.log(myStack.peek());
myStack.push(30)
myStack.print()
console.log(myStack.isEmpty());

console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.size());
myStack.print()



