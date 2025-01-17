

class HashTable{
    constructor(size){
        this.table = new Array(size)
        this.size = size
    }
    hash(key){
        let total = 0
        for(let i=0;i<key.length;i++){
            total += key.charCodeAt(i)
        }
        return total % this.size
    }
    set(key,value){
        const index = this.hash(key)
        if(!this.table[index]) this.table[index] = []
        for(let pair of this.table[index]){
            if(pair[0] === key){
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
        for(let i=0;i<this.table[index].length;i++){
            if(this.table[index][i][0]=== key){
                this.table[index].splice(i,1)
            }
        }
        return false
    }
    display(){
        this.table.forEach((bucket,index)=>{
            console.log(`Bucket ${index}:`,bucket);
            
        })
    }
}

const hashtable = new HashTable(25)

const str = "Mississippi"


for(let char of str){
    let count = hashtable.get(char)||0
    hashtable.set(char,count+1)
}
for(let char of str){
    if(hashtable.get(char)){
        console.log(`${char}:${hashtable.get(char)}`);
        hashtable.set(char,undefined)
    }
}
