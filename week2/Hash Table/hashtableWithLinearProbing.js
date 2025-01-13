class HashTableLinearProbing {
    constructor(size) {
        this.table = new Array(size);
        this.size = size;
    }
    hash(key) {
        let total = 0;
        for (let char of key) {
            total += char.charCodeAt(0);
        }
        return total % this.size;
    }
    set(key, value) {
        let index = this.hash(key);
        while (this.table[index] && this.table[index][0] !== key) {
            index = (index + 1) % this.size;
        }
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
}

// Example Usage
const hashTableLP = new HashTableLinearProbing(5);
hashTableLP.set("name", "Jamsheera");
hashTableLP.set("age", 30);
hashTableLP.set("job", "Developer");
hashTableLP.set("city", "Malappuram");
hashTableLP.set("country", "India"); // Overwrites existing slots due to lack of space
hashTableLP.print(); // Output depends on overwriting
