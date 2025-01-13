

class HashTable {
    constructor(initialSize = 10, loadFactor = 0.7) {
        this.table = new Array(initialSize);
        this.size = 0;
        this.loadFactor = loadFactor;
    }

    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }
        return hash % this.table.length;
    }

    // Resize the table and rehash all elements
    _resize() {
        const newSize = this.table.length * 2;
        const newTable = new Array(newSize);

        // Rehash all existing elements into the new table
        for (let i = 0; i < this.table.length; i++) {
            if (this.table[i]) {
                for (let pair of this.table[i]) {
                    const index = this._hash(pair[0]) % newSize;
                    if (!newTable[index]) {
                        newTable[index] = [];
                    }
                    newTable[index].push(pair);
                }
            }
        }

        this.table = newTable;
    }

    set(key, value) {
        // Check if resizing is needed
        if (this.size / this.table.length > this.loadFactor) {
            this._resize();
        }

        let index = this._hash(key);
        if (!this.table[index]) {
            this.table[index] = [];
        }

        // Check if the key already exists and update value if necessary
        for (let pair of this.table[index]) {
            if (pair[0] === key) {
                pair[1] = value;
                return;
            }
        }

        // If the key doesn't exist, insert it
        this.table[index].push([key, value]);
        this.size++;
    }

    get(key) {
        let index = this._hash(key);
        if (this.table[index]) {
            for (let pair of this.table[index]) {
                if (pair[0] === key) {
                    return pair[1];
                }
            }
        }
        return undefined;
    }

    remove(key) {
        let index = this._hash(key);
        if (this.table[index]) {
            for (let i = 0; i < this.table[index].length; i++) {
                if (this.table[index][i][0] === key) {
                    this.table[index].splice(i, 1);
                    this.size--;
                    return true;
                }
            }
        }
        return false;
    }

    display() {
        for (let i = 0; i < this.table.length; i++) {
            if (this.table[i] && this.table[i].length) {
                console.log(`Index ${i}:`, this.table[i]);
            }
        }
    }
}

const hashTable = new HashTable(10);
hashTable.set("name", "Jamsheera");
hashTable.set("age", 30);
hashTable.set("job", "Developer");
hashTable.set("hobby", "Gardening");
hashTable.set("color", "Blue");

console.log(hashTable.get("job")); // Output: Developer
hashTable.remove("age");
hashTable.display();
