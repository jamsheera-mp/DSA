
function rangeOfNumbers(startNum,endNum){
    if(startNum > endNum){
        return []
    }else{
        const numbers = rangeOfNumbers(startNum,endNum-1)
        numbers.push(endNum)
        return numbers
    }
}
console.log(rangeOfNumbers(1,10))