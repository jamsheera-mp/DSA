class HashNode {
    constructor(key, value) {
        this.key = key; // The key of the node
        this.value = value; // The value associated with the key
        this.next = null; // Points to the next node in the chain
    }
}

class HashTable {
    constructor(size = 10) {
        this.bucketArray = new Array(size); // The array of buckets
        this.size = size; // Number of buckets
        this.currentSize = 0; // Tracks the number of elements in the hash table
    }

    // Hash function to calculate the index
    hashFunction(key) {
        let hash = 0;
        for (let char of key) {
            hash += char.charCodeAt(0);
        }
        return hash % this.size;
    }

    // Insert or update a key-value pair
    insert(key, value) {
        const index = this.hashFunction(key);

        // If bucket is empty, directly add the new node
        if (!this.bucketArray[index]) {
            this.bucketArray[index] = new HashNode(key, value);
        } else {
            // Collision handling using separate chaining
            let currentNode = this.bucketArray[index];
            while (currentNode) {
                if (currentNode.key === key) {
                    currentNode.value = value; // Update value if key exists
                    return;
                }
                if (!currentNode.next) break; // Reach the end of the chain
                currentNode = currentNode.next;
            }
            currentNode.next = new HashNode(key, value); // Add the new node to the end of the chain
        }

        this.currentSize++;

        // Rehash if the load factor exceeds a threshold
        if (this.currentSize / this.size > 0.75) {
            this.rehash();
        }
    }

    // Retrieve the value associated with a key
    get(key) {
        const index = this.hashFunction(key);
        let currentNode = this.bucketArray[index];

        while (currentNode) {
            if (currentNode.key === key) {
                return currentNode.value;
            }
            currentNode = currentNode.next;
        }

        return null; // Key not found
    }

    // Delete a key-value pair
    delete(key) {
        const index = this.hashFunction(key);
        let currentNode = this.bucketArray[index];
        let prevNode = null;

        while (currentNode) {
            if (currentNode.key === key) {
                if (prevNode) {
                    prevNode.next = currentNode.next; // Remove the node from the chain
                } else {
                    this.bucketArray[index] = currentNode.next; // Update head of the chain
                }
                this.currentSize--;
                return true; // Deletion successful
            }
            prevNode = currentNode;
            currentNode = currentNode.next;
        }

        return false; // Key not found
    }

    // Resize and rehash the table when the load factor exceeds the threshold
    rehash() {
        const oldBucketArray = this.bucketArray;
        this.size *= 2; // Double the size of the table
        this.bucketArray = new Array(this.size);
        this.currentSize = 0;

        for (let node of oldBucketArray) {
            let currentNode = node;
            while (currentNode) {
                this.insert(currentNode.key, currentNode.value);
                currentNode = currentNode.next;
            }
        }
    }

    // Print the hash table
    printTable() {
        for (let i = 0; i < this.size; i++) {
            let currentNode = this.bucketArray[i];
            let chain = [];
            while (currentNode) {
                chain.push(`[${currentNode.key}: ${currentNode.value}]`);
                currentNode = currentNode.next;
            }
            console.log(`Bucket ${i}: ${chain.join(" -> ")}`);
        }
    }
}

// Example usage
const hashTable = new HashTable();

hashTable.insert("name", "Alice");
hashTable.insert("age", 25);
hashTable.insert("city", "New York");
hashTable.insert("state", "NY");
hashTable.insert("country", "USA");

console.log("Value for 'name':", hashTable.get("name"));
console.log("Value for 'age':", hashTable.get("age"));

hashTable.printTable();

hashTable.delete("city");
console.log("After deleting 'city':");
hashTable.printTable();
