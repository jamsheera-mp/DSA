

class Stack{
    constructor(){
        this.queue1 = []
        this.queue2 = []
    }
    push(element){
        this.queue1.push(element)
    }
    pop(){
        if(this.queue1.length === 0) return null
        while(this.queue1.length > 1){
            this.queue2.push(this.queue1.shift())
        }

        const popped = this.queue1.shift()
        let temp = this.queue1
        this.queue1 = this.queue2
        this.queue2 = temp
        return popped
    }
    peek(){
        if(this.queue1.length === 0) return null
        while(this.queue1.length > 1){
            this.queue2.push(this.queue1.shift())
        }
        const topElement = this.queue1[0]
        let temp = this.queue1
        this.queue1 = this.queue2
        this.queue2 = temp
        return topElement
    }
    isEmpty(){
        return this.queue1.length === 0
    }
   
}

const stack = new Stack()
stack.push(10)
stack.push(20)
stack.push(30)
console.log('stack:',stack.print())
console.log(stack.peek());
console.log(stack.isEmpty());
stack.pop()
//console.log('stack:',stack)
console.log(stack.peek());


