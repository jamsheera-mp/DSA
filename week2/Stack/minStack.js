
class MinStack{
    constructor(){
        this.stack = []
        this.minStack = []
    }
    push(x){
        this.stack.push(x)
        if(this.minStack.length === 0 || x <= this.minStack[this.minStack.length -1]){
            this.minStack.push(x)
        }
    }
    pop(){
        const popped = this.stack.pop()
        if(popped === this.minStack[this.minStack.length - 1]){
            this.minStack.pop()
        }
    }
    top(){
        return this.stack[this.stack.length - 1]
    }
    getMin(){
        return this.minStack[this.minStack.length - 1]
    }
}

const minStack = new MinStack();
minStack.push(5);
minStack.push(3);
minStack.push(7);
minStack.push(2);

console.log(minStack.getMin()); // 2 (smallest value in the stack)

minStack.pop(); // Removes 2
console.log(minStack.getMin()); // 3 (next smallest value)