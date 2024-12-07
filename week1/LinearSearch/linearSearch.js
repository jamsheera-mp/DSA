//write a function to search "target" in 'nums'.if target exists,then return its index,otherwise return -1,

function linearSearch(nums,target){
    for(let i=0;i<nums.length;i++){
        if(nums[i] === target){
            return i
        }
    }
    return -1
}

let nums = [1,2,3,4,5,6,7,8,9]
let target = 8
console.log(linearSearch(nums,target))