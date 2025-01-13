

let nums = [43, 5746, 678];

let a=43
let str= a.toString()
let reverse = str.split('').reverse().join('')
console.log(reverse);
let result = []
for(let num of nums){
    
   let str= num.toString()
   let rev = str.split('').reverse().join('')
  
    result.push(rev)
}
console.log(result);

let output= []
for(let i=result.length-1;i>=0;i--){
    output.push(result[i])
    
}
console.log(output);



