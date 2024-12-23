

class Stack{
    size
    top
    a = []

    isEmpty(){
        return (this.top < 0)
    }
    constructor(n){
        this.top = -1
        this.size = n
        this.a = new Array(this.size)
    }
    push(x){
        if(this.top >= this.size){
            console.log("Stack is full")
            return false
        }else{
            this.a[++this.top] = x
            return true
        }

    }
}