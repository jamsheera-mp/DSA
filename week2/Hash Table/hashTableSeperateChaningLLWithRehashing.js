class Node {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.next = null;
    }
}

class HashTable {
    constructor(initialSize = 10, loadFactor = 0.7) {
        this.buckets = new Array(initialSize).fill(null);
        this.size = 0;
        this.loadFactor = loadFactor;
    }

    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }
        return hash % this.buckets.length;
    }

    _resize() {
        const newBuckets = new Array(this.buckets.length * 2).fill(null);
        const oldBuckets = this.buckets;

        this.buckets = newBuckets;
        this.size = 0;

        // Rehash all elements
        for (let head of oldBuckets) {
            while (head) {
                this.set(head.key, head.value);
                head = head.next;
            }
        }
    }

    set(key, value) {
        if (this.size / this.buckets.length > this.loadFactor) {
            this._resize();
        }

        const index = this._hash(key);
        let head = this.buckets[index];

        while (head) {
            if (head.key === key) {
                head.value = value; // Update existing key
                return;
            }
            head = head.next;
        }

        // Insert new key-value pair at the head of the linked list
        const newNode = new Node(key, value);
        newNode.next = this.buckets[index];
        this.buckets[index] = newNode;
        this.size++;
    }

    get(key) {
        const index = this._hash(key);
        let head = this.buckets[index];

        while (head) {
            if (head.key === key) {
                return head.value;
            }
            head = head.next;
        }
        return undefined; // Key not found
    }

    remove(key) {
        const index = this._hash(key);
        let head = this.buckets[index];
        let prev = null;

        while (head) {
            if (head.key === key) {
                if (prev) {
                    prev.next = head.next;
                } else {
                    this.buckets[index] = head.next;
                }
                this.size--;
                return true;
            }
            prev = head;
            head = head.next;
        }
        return false; // Key not found
    }

    display() {
        for (let i = 0; i < this.buckets.length; i++) {
            let head = this.buckets[i];
            const elements = [];
            while (head) {
                elements.push(`[${head.key}: ${head.value}]`);
                head = head.next;
            }
            if (elements.length > 0) {
                console.log(`Bucket ${i}: ${elements.join(" -> ")}`);
            }
        }
    }
}

// Example Usage
const hashTable = new HashTable(5);

hashTable.set("name", "Jamsheera");
hashTable.set("age", 30);
hashTable.set("job", "Developer");
hashTable.set("hobby", "Gardening");
hashTable.set("color", "Blue");

console.log(hashTable.get("job")); // Output: Developer
hashTable.remove("age");
hashTable.display();


//Dynamic Resizing: The _resize method doubles the size of the table and rehashes all existing entries when the load factor exceeds the threshold.
//Load Factor: The loadFactor parameter (default 0.7) determines when to resize the table. When the number of elements exceeds 70% of the table's capacity, the table size is doubled.
//Rehashing: After resizing, all the elements are rehashed into the new table using the updated size.
//With this dynamic resizing, your hashtable will grow as needed, improving its performance under heavy load while managing memory effectively.

//Advantages of Linked Lists in Hashtable:
//Dynamic Size for Buckets: Each bucket can grow as needed without worrying about fixed size.
//Better for Chaining: Simple and straightforward chaining implementation.
//Drawbacks:
//Memory Overhead: Each node in the linked list consumes extra memory for the next pointer.
//Resizing Still Required: Resizing is still needed for the buckets array to maintain optimal performance, even though linked lists handle individual bucket growth dynamically.
//In summary, using linked lists eliminates the problem of fixed size for individual buckets but does not eliminate the need to resize the overall bucket array to maintain good performance as the number of elements grows.

//If you implement the hashtable with linked lists for separate chaining instead of arrays, the issue of a fixed size for the buckets does not arise because linked lists are inherently dynamic. However, the number of buckets in the hashtable still affects performance, and resizing may still be needed for optimal performance. Here's an explanation:

//Key Considerations:
//Dynamic Size of Linked Lists:

//Linked lists are dynamic data structures, so each bucket (which is a linked list) can grow or shrink as needed without requiring resizing of the linked list itself.
//Performance and Load Factor:

//Even with linked lists, if the number of elements in the hashtable becomes very large relative to the number of buckets, the average length of the linked lists will increase. This degrades performance from O(1) to O(n) in the worst case for operations like get, set, and remove.
///*  */To avoid this, you still need to monitor the load factor (number of elements divided by the number of buckets) and dynamically resize the hashtable (i.e., increase the number of buckets and rehash the elements).
/* Resizing with Linked Lists:

When the load factor exceeds a threshold (e.g., 0.7), you can increase the number of buckets and rehash all existing elements into the new hashtable. The resizing process will involve creating a new array of linked lists with a larger size and redistributing the elements.
Memory Overhead:
 */
//Linked lists introduce additional memory overhead because each node stores a pointer to the next node. This may be more memory-intensive than using arrays for buckets, especially for small datasets.