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

    insert(data,index){
        if(index < 0 && index > this.length){
            return
        }
        if(index === 0){
            newNode.next = this.head
            this.head = newNode
        }else{
            const newNode = new Node(data)
            let prev = this.head
            for(let i=0;i<index-1;i++){
                prev = prev.next
            }
            newNode.next = prev.next
            prev.next = newNode
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

let myLinkedList = new LinkedList(1)
myLinkedList.insert(12,1)
myLinkedList.insert(35,2)
myLinkedList.insert(22,3)
myLinkedList.print()