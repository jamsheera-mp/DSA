
class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class LinkedList {
    constructor(data) {
        const newNode = new Node(data)
        this.head = newNode
        this.tail = newNode
        this.length = 1
    }

    insert(data, index) {
        const newNode = new Node(data)
        if (index < 0 || index > this.length) {
            return
        }
        if (index === 0) {
            newNode.next = this.head
            this.head = newNode
        } else {
            let prev = this.head
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next
            }
            newNode.next = prev.next
            prev.next = newNode
        }
        if (index === this.length) {
            this.tail = newNode
        }
        this.length++
        return this
    }

    reverse() {
        let prev = null
        let current = this.head
        while (current) {
            let next = current.next
            current.next = prev
            prev = current
            current = next
        }
        this.head = prev
    }
    print() {
        let current = this.head
        let list = ''
        while (current) {
            list += current.data + ' '
            current = current.next
        }
        console.log(list)
    }
}
let myLinkedList = new LinkedList(1)
myLinkedList.insert(11, 1)
myLinkedList.insert(12, 2)
myLinkedList.insert(22, 3)
myLinkedList.print()

myLinkedList.insert(12, 4)
myLinkedList.insert(11, 5)
myLinkedList.insert(13, 6)

myLinkedList.print()



myLinkedList.reverse()
myLinkedList.print()

