

class HashTable{
    constructor(size){
        this.table = new Array(size)
        this.size = 0
    }
    _hash(key){
        let hash = 0
        for(let i=0;i<key.length;i++){
            hash += key.charCodeAt(i)
          
        }
        return hash % this.table.length
    }
    set(key,value){
        let index = this._hash(key)
        if(!this.table[index]){
            this.table[index] = []
        }
        for(let pair of this.table[index]){
            if(pair[0] ===  key){
                pair[1] = value
                return 
            }
        }
        this.table[index].push([key,value])
        this.size++
    }
    get(key){
        let index = this._hash(key)
        if(this.table[index]){
            for(let pair of this.table[index]){
                if(pair[0] === key){
                    return pair[1]
                }
            }
        }
        return undefined
    }
    remove(key){
        let index = this._hash(key)
        if(this.table[index]){
            for(let i=0;i<this.table[index].length;i++){
                if(this.table[index][i][0] === key){
                    this.table[index].splice(i,1)
                    this.size--
                    return true
                }
            }
        }
        
        return false
    }
    display(){
        for(let i=0;i<this.table.length;i++){
            if(this.table[i] && this.table[i].length){
                console.log(`Index ${i}:`,this.table[i]);
                
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