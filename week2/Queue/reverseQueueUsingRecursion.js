

function print(queue){
    while(queue.length != 0){
        console.log(queue[0])
        queue.shift()
        
    }
}

function reverseQueue(q){
    if(q.length == 0){
        return
    }
    let fr = q[0]
    q.shift()
    reverseQueue(q)
    q.push(fr)
}

let queue = []
queue.push(10)
queue.push(20)
queue.push(30)
queue.push(40)
reverseQueue(queue)
print(queue)