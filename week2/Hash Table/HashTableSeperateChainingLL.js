class Node {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.next = null;
    }
}

class HashTable {
    constructor(size) {
        this.table = new Array(size); // Array of linked lists
        this.size = size;
    }

    // Simple hash function
    hash(key) {
        let hash = 0;
        for (let char of key) {
            hash += char.charCodeAt(0);
        }
        return hash % this.size;
    }

    // Insert key-value pair
    set(key, value) {
        const index = this.hash(key);
        if (!this.table[index]) {
            this.table[index] = new Node(key, value); // Create new linked list
        } else {
            let current = this.table[index];
            while (current) {
                if (current.key === key) {
                    current.value = value; // Update value if key exists
                    return;
                }
                if (!current.next) break; // Stop at the end of the list
                current = current.next;
            }
            current.next = new Node(key, value); // Add new node to the end
        }
    }

    // Retrieve value by key
    get(key) {
        const index = this.hash(key);
        let current = this.table[index];
        while (current) {
            if (current.key === key) {
                return current.value;
            }
            current = current.next;
        }
        return undefined; // Key not found
    }

    // Delete a key-value pair
    delete(key) {
        const index = this.hash(key);
        let current = this.table[index];
        let prev = null;
        while (current) {
            if (current.key === key) {
                if (prev) {
                    prev.next = current.next; // Remove node from list
                } else {
                    this.table[index] = current.next; // Remove head node
                }
                return current.value;
            }
            prev = current;
            current = current.next;
        }
        return undefined; // Key not found
    }

    // Print the hash table
    print() {
        for (let i = 0; i < this.size; i++) {
            let output = `Index ${i}: `;
            let current = this.table[i];
            while (current) {
                output += `[${current.key}: ${current.value}] -> `;
                current = current.next;
            }
            console.log(output + "null");
        }
    }
}

// Example usage
const hashTable = new HashTable(5);
hashTable.set("name", "Jamsheera");
hashTable.set("age", 30);
hashTable.set("job", "Developer");
hashTable.set("hobby", "Gardening");
hashTable.set("color", "Blue");
console.log(hashTable.get("job")); // Output: Developer
hashTable.delete("age");
hashTable.print();
