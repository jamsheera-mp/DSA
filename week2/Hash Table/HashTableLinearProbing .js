class HashTableLinearProbing {
    constructor(size) {
        this.table = new Array(size);
        this.size = size;
        this.count = 0; // To track the number of elements
    }
    hash(key) {
        let total = 0;
        for (let char of key) {
            total += char.charCodeAt(0);
        }
        return total % this.size;
    }
    set(key, value) {
        if (this.count / this.size > 0.7) {
            this.rehash();
        }
        let index = this.hash(key);
        while (this.table[index] && this.table[index][0] !== key) {
            index = (index + 1) % this.size;
        }
        if (!this.table[index]) this.count++;
        this.table[index] = [key, value];
    }
    get(key) {
        let index = this.hash(key);
        while (this.table[index]) {
            if (this.table[index][0] === key) {
                return this.table[index][1];
            }
            index = (index + 1) % this.size;
        }
        return undefined;
    }
    delete(key) {
        let index = this.hash(key);
        while (this.table[index]) {
            if (this.table[index][0] === key) {
                const value = this.table[index][1];
                this.table[index] = undefined;
                this.count--;
                return value;
            }
            index = (index + 1) % this.size;
        }
        return undefined;
    }
    print() {
        this.table.forEach((bucket, index) => {
            if (bucket) {
                console.log(`Bucket ${index} :`, bucket);
            }
        });
    }
    rehash() {
        const oldTable = this.table;
        this.size *= 2; // Double the size
        this.table = new Array(this.size);
        this.count = 0; // Reset count and reinsert all elements
        for (let bucket of oldTable) {
            if (bucket) {
                this.set(bucket[0], bucket[1]);
            }
        }
    }
}

// Example Usage
const hashTableLP = new HashTableLinearProbing(5);
hashTableLP.set("name", "Jamsheera");
hashTableLP.set("age", 30);
hashTableLP.set("job", "Developer");
hashTableLP.set("city", "Malappuram");
hashTableLP.print(); // Prints the current table
console.log("Rehashing...");
hashTableLP.set("country", "India"); // Triggers rehashing
hashTableLP.print(); // Prints the new, larger table
console.log(hashTableLP.get("age")); // Output: 30
hashTableLP.delete("name");
console.log(hashTableLP.get("name")); // Output: undefined
