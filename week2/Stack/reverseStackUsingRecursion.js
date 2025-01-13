

let stack = []

function insert_at_bottom(x){

    if(stack.length == 0){
        stack.push(x)
    }else{
        let a  = stack.pop()
        insert_at_bottom(x)

        stack.push(a)
    }
}
function reverse(){
    if(stack.length > 0){
        let x = stack.pop()
        reverse()

        insert_at_bottom(x)
    }
}

// push elements into
// the stack
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);

console.log('Stack:'+stack.join(" "));
reverse()
console.log('Reverse stack:'+ stack.join(" "));

