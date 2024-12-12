
//Append a node at the end(Insert a node at the end of list) 

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
myLinkedList.append(20)
myLinkedList.append(10)


myLinkedList.print() // Output: 5 10 20

