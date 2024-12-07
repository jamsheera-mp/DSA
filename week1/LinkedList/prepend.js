
//Append a node to the end of the linked list(Insert at the end)



class Node{
    constructor(data){
        this.data = data
        this.next = null
    }
}

class LinkedList{
    constructor(data){
        const newNode = new Node(data)
        this.head = newNode
        this.tail = newNode
        this.length = 1

    }


append(data){
    if(!this.head){
        this.head = newNode
        this.tail = newNode
    }else{
        const newNode = new Node(data)
        newNode.next = this.head
        this.head = newNode
    }
    this.length++
    return this
}
print(){
    let current = this.head
    let list = ''
    while(current){
        list += current.data + ' '
        current = current.next
        
    }
    console.log(list)
}

}
let myLinkedList = new LinkedList(20)
myLinkedList.append(30)
myLinkedList.append(40)
myLinkedList.append(50)
myLinkedList.print()
