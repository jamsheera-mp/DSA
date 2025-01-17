
//find unique elements from the array

let arr = ['apple','lemon','apple','orange','grape','orange','mango']

function findUnique(arr){
    let map = new Map()
    for(x of arr){
        if(map.has(x)){
            map.set(x,map.get(x)+1)
        }else{
            map.set(x,1)
        }
    }
    let result = []
    map.forEach((value,key)=>{
        if(value === 1){
            result.push(key)
        }
    })
    return result
}

console.log(findUnique(arr));


