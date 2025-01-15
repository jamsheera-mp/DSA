

let str = 'hello how are you'


let splits= str.split(' ')
console.log(splits);
let result =''
for(char of splits){
    
    //console.log( char[char.length-1].toUpperCase());
    let lastLetter = char[char.length-1].toUpperCase()
    result += char.slice(0,-1)+lastLetter+ ' '
   //console.log(result);
   
    
}
console.log(result);



let str1 = "Hello how are you doing ";

function Upper(str){
   let result = str.split(' ').map((char)=>{ 
    if(char.length>0){
        let last = char[char.length-1].toUpperCase()
        return char.slice(0,-1)+last
    }
   })
   return result.join(' ');
}

console.log(Upper(str))

