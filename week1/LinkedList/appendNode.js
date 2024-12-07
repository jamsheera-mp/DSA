
//Prepend a node at the beginning(Insert a node at the beginning of list) 

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
        this.tail.next = newNode
        this.tail = newNode
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
let myLinkedList = new LinkedList(30)
myLinkedList.prepend(20)
myLinkedList.prepend(10)


myLinkedList.print() // Output: 5 10 20

