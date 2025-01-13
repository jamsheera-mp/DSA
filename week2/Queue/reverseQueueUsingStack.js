

let queue = []

function print(){
    while(queue.length > 0){
        console.log(queue[0]);
        queue.shift()
        
    }
}
function reverseQueue(){
    let stack  = []
    while(queue.length > 0){
        stack.push(queue[0])
        queue.shift()
    }
    while(stack.length > 0){
        queue.push(stack[stack.length - 1]);
            stack.pop();
    }
}


    queue.push(10);
    queue.push(20);
    queue.push(30);
    queue.push(40);
    queue.push(50);
    queue.push(60);
    queue.push(70);
    queue.push(80);
    queue.push(90);
    queue.push(100);
 
    reverseQueue();
    print();