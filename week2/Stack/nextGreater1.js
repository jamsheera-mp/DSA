

var nextGreater = function(nums1,nums2){
    const stack = []
    const map = new Map()
    for(let i=nums2.length-1;i>=0;i--){
       
        while(stack.length >0 && stack[stack.length-1] <= nums2[i]){
            stack.pop()
        }
        map.set(nums2[i],stack.length>0?stack[stack.length-1]:-1)
        stack.push(nums2[i])
    }
    return nums1.map(num=>map.get(num)||-1)
}

// Example Usage
let nums1 = [4, 1, 2];
let nums2 = [1, 3, 4, 2];
console.log(nextGreater (nums1, nums2)); // Output: [-1, 3, -1]