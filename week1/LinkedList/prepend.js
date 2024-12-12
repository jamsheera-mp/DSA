
//Prepend a node to the beginning of the linked list(Insert at the end)



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


prepend(data){
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
myLinkedList.prepend(30)
myLinkedList.prepend(40)
myLinkedList.prepend(50)
myLinkedList.print()
