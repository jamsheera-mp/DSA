class HashTable {
    constructor(size) {
        this.table = new Array(size);
        this.size = 0;
    }

    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }
        return hash % this.table.length;
    }

    set(key, value) {
        let index = this._hash(key);
        if (!this.table[index]) {
            this.table[index] = []; // Initialize a bucket for chaining
        }
        // Check if key already exists and update
        for (let pair of this.table[index]) {
            if (pair[0] === key) {
                pair[1] = value;
                return;
            }
        }
        this.table[index].push([key, value]);
        this.size++;
    }

    get(key) {
        const index = this._hash(key);
        if (this.table[index]) {
            for (let pair of this.table[index]) {
                if (pair[0] === key) {
                    return pair[1];
                }
            }
        }
        return undefined; // Return undefined if key is not found
    }

    remove(key) {
        const index = this._hash(key);
        if (this.table[index]) {
            for (let i = 0; i < this.table[index].length; i++) {
                if (this.table[index][i][0] === key) {
                    this.table[index].splice(i, 1); // Remove key-value pair
                    this.size--;
                    return true;
                }
            }
        }
        return false; // Return false if key is not found
    }

    display() {
        for (let i = 0; i < this.table.length; i++) {
            if (this.table[i] && this.table[i].length > 0) {
                console.log(i, this.table[i]);
            }
        }
    }
}

// Test the corrected implementation
const table = new HashTable(50);
table.set("Canada", 300);
table.set("Spain", 400);
table.set("France", 500);
table.display();

console.log(table.get("Canada")); // 300
console.log(table.get("Spain"));  // 400

console.log(table.remove("Spain")); // true
console.log(table.get("Spain"));   // undefined

table.display();
