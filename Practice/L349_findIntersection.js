
//Input: 
let nums1 = [1, 2, 2, 1]
let nums2 = [2, 2]
//Output: [2]

function findIntersectionOfArray(nums1,nums2){
    // Create a hash set and insert all elements of a
    const hashSet = new Set(nums1);
    let result = new Set()

    // Check each element of b in the hash set
    for (const num of nums2) {
        if (hashSet.has(num)) {
            result.add(num)
        }
      
    }
    // If all elements of b are found in the hash set
    return [...result];

}
console.log(findIntersectionOfArray(nums1,nums2));


var intersect = function(nums1, nums2) {
    let set = new Set(nums1)
    
    let result = []
    for(let num of nums2){
        if(set.has(num)){
            result.push(num)
        }
    }
    return result
};

let num1 = [4,9,5]
let num2 = [9,4,9,8,4]
console.log(intersect(num1,num2));
console.log(intersect(nums1,nums2));

