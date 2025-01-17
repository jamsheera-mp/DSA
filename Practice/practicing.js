

class MinStack{
    constructor(){
        this.stack = []
        this.minStack = []
    }
    push(val){
        this.stack.push(val)
        if(this.minStack.length === 0 || val <= this.minStack[this.minStack.length -1 ]){
            this.minStack.push(val)
        }
    }
    pop(){
        const popped = this.stack.pop()
        if(popped === this.minStack[this.minStack.length - 1]){
            this.minStack.pop()
        }
    }
    top(){
        return this.stack[this.stack.length - 1 ]
    }
    getMin(){
        return this.minStack[this.minStack.length - 1 ]
    }
}

const minStack = new MinStack()
minStack.push(2)
minStack.push(3)
console.log(minStack.getMin());
console.log(minStack.top());
minStack.push(1)
console.log(minStack.getMin());

