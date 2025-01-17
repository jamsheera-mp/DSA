

let num = [10, 5, 3, 4, 3, 5, 6]

function findFirstRepeatingElement(num){
    let map = new Map()
    
    for(let i=0;i<num.length;i++){
        if(map.has(num[i])){
            
            return num[i]
            
        }
           map.set(num[i],1)
        
    }
    return -1
    
}
console.log(findFirstRepeatingElement(num));
