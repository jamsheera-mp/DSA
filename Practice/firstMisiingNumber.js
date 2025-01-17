



const map = new Map()
for(const num of nums){
    map.set(num,true)
}

let expected = 1
while(true){
    if(!map.has(expected)){
        console.log(expected);
        break
    }
    expected++
}



const nums = [3, 7, 1, 2, 8, -1, -10, 4];
//console.log(findFirstMissingNumber(nums)); // Output: 5