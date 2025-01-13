
class HashTable{
    constructor(size){
        this.table = new Array(size)
        this.size = size
    }
    hash(key){
        let total = 0
        for(let char of key){
            total += char.charCodeAt(0)
        }
        return total % this.size
    }
    set(key,value){
        const index = this.hash(key)
        if(!this.table[index]){
            this.table[index] = []
        }
        for(let pair of this.table[index]){
            if(pair[0]=== key){
                pair[1] = value
                return
            }
        }
        this.table[index].push([key,value])
    }
    get(key){
        const index = this.hash(key)
        if(!this.table[index]) return undefined
        for(let pair of this.table[index]){
            if(pair[0] === key){
                return pair[1]
            }
        }
        return undefined
    }
    delete(key){
        const index = this.hash(key)
        if(!this.table[index]) return false
        for(let i= 0;i<this.table[index].length;i++){
            if(this.table[index][i][0] === key){
                this.table[index].splice(i,1)
                return true
            }
        }
        return false
    }
    print(){
        this.table.forEach((bucket,index)=>{
            if(bucket){
                console.log(`Bucket ${index} :`, bucket)
            }
        })
    }
}

        // Example Usage
        const hashTable = new HashTable(10);
        hashTable.set("name", "Jamsheera");
        hashTable.set("age", 30);
        hashTable.set("job", "Developer");
        console.log(hashTable.get("name")); // Output: "Jamsheera"
        hashTable.delete("age");
        hashTable.print();