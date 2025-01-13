

function print(queue){
    while(queue.length != 0){
        console.log(queue[0])
        queue.shift()
        
    }
}

function reverseQueue(queue){
    if(queue.length == 0){
        return
    }
    let front = queue[0]
    queue.shift()
    reverseQueue(q)
    queue.push(front)
}

let queue = []
queue.push(10)
queue.push(20)
queue.push(30)
queue.push(40)
reverseQueue(queue)
print(queue)