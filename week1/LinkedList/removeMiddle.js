
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
        if(index <0 || index > this.length){
            return
        }
        if(index === 0){
            newNode.next = this.head
            this.head = newNode
        }else{
            const newNode = new Node(data)
            let prev = this.head
            for(let i = 0; i < index - 1; i++){
                prev = prev.next
            }
            newNode.next = prev.next
            prev.next = newNode
        }
        this.length++
        return this
    }
    removeMiddle(){
        let fast = this.head
        let slow = this.head
        let prev = null

        while(fast && fast.next){
            fast = fast.next.next
            slow= slow.next
            prev = slow
        }
        if(prev){
            prev.next = slow.next
            if(slow === this.tail){
                this.tail = prev
            }
            this.length--
            return slow.data
        }
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
myLinkedList.insert(22,2)
myLinkedList.insert(10,3)
myLinkedList.insert(44,4)
myLinkedList.insert(52,5)
myLinkedList.print()
console.log(myLinkedList.removeMiddle())
myLinkedList.print()
console.log(myLinkedList.removeMiddle())

