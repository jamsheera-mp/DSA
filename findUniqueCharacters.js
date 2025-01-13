
//find unique characters from a string
let str = 'aaaqfvcdeerrryyhhgfdrrtyutt'

function findUnique(s){
  let map = new Map()

  for(let char of s){
    if(!map.has(char)){
      map.set(char,1)
    }else{
      map.set(char,map.get(char)+1)
    }
  }
  let array = []
  map.forEach((value,key)=>{
    if(value === 1){
      array.push(key)
    }
  })
  return array
}

console.log(findUnique(str));
