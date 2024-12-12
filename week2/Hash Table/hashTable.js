
class HashTable{
    constructor(size){
        this.table = new Array(size)
    }

    _hash(key){
        let hash = 0
        for(let i=0;i<key.length;i++){
            hash+= key.charCodeAt(i)
        }
        return hash % this.size
    }

    set(key,value){
        let index = this._hash(key)
        this.table[index] = [key,value]
        this.size++
    }

    get(key){
        const index = this._hash(key)
        return this.table[index]
    }

    remove(key){
        const index = this._hash(key)
        if(this.table[index] && this.table[index].length){
            this.table[index] = []
            this.size--
            return true
        }else{
            return false
        }
    }

    display(){
        for(let i=0;i<this.table.length;i++){
            if(this.table[i]){
                console.log(i,this.table[i])
            }
        }
    }
}

const table = new HashTable(50)
table.set("Canada", 300);
table.set("Spain", 400);
table.display()

console.log(table.get("Canada"));
console.log(table.get('Spain'));



table.display()

console.log(table.remove('spain'));
console.log(table.get('Spain'));



