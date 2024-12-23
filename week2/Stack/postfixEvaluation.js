

class Stack{
    constructor(){
        this.items = []
        this.size = 0
    }
    push(element){
       
        this.items.push(element)
    }
    pop(){
        if(this.items.length === 0){
            return "underflow"
        }
        return this.items.pop()
    }
    isEmpty(){
        return this.items.length === 0
    }
}


function postfixEvaluation(exp){
    let stack = new Stack()
    for(let i=0;i<exp.length;i++){
        let c = exp[i]
        if(!isNaN(c)){
            stack.push(parseInt(c))
        }else{
            let operand2 = stack.pop()
            let operand1 = stack.pop()
            if(operand1 === "underflow"|| operand2 === "underflow"){
                return "Invalid Expression"
            }
            
        }
    }
}