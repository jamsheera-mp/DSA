
function binarysearchRecursive(array,target,start,end){
    if(start > end){
        return -1
    }
    let mid = Math.floor((start + end)/2)

    if(array[mid] === target){
        return mid
    }else if(array[mid] < target){
        return binarysearchRecursive(array,target,mid+1,end)
    }else{
        return binarysearchRecursive(array,target,start,mid-1)
    }
}

let array = [1,3,5,7,9]
let target = 5
console.log(binarysearchRecursive(array,target,0,array.length-1)) // Output: 2
