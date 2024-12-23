
class Node {
    constructor(data){
        this.data = data
        this.next = null
    }
}

class LinkedList{
    constructor(){
        this.head = null
    }
//}

//let node1 = new Node(1)
//let node2 = new Node(5)
//node1.next = node2

//let list = new LinkedList(node1)
//console.log(list.head.next.value)

//Insert data at end
append(data){
    let newNode = new Node(data)
    if(!this.head){
        this.head = newNode
    }else{
        let current = this.head
        while(current.next !== null){
            current = current.next
        }
        current.next = newNode
    }
}
//Insert data at beginning
prepend(data){
    let newNode = new Node(data)
        newNode.next = this.head
        this.head = newNode
    
}

//delete data
delete(data){
    if(!this.head){
        return null
    }
    if(this.head.data === data){
        this.head = this.head.next
        return
    }
    let current = this.head
    while(current.next !== null){
        if(current.next.data === data){
            current.next = current.next.next
            return
        }
        current = current.next
    }
}

search(data){
    let current = this.head
    while(current.next !== null){
        if(current.data === data){
            return true
        }
        current = current.next
    }
    return false
}

print(){
    let current = this.head
    const elements = []
    while(current !== null){
        elements.push(current.data)
        current = current.next
    }
    console.log(elements.join( ' ->'))
}
}
const myLinkedList = new LinkedList()
myLinkedList.append(10)
myLinkedList.append(20)
myLinkedList.append(30)
myLinkedList.append(40)
myLinkedList.append(50)
myLinkedList.print() // Output: 10 -> 20 -> 30
console.log(myLinkedList.search(20))// Output: true
myLinkedList.delete(20)
myLinkedList.print()