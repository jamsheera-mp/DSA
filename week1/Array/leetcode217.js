//Contains Duplicate
//Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

 //nput: nums = [1,2,3,1]

//Output: true

//Explanation:

//The element 1 occurs at the indices 0 and 3.

var containsDuplicate = function(nums) {
    return new Set(nums).size !== nums.length
};

let nums=[1,2,3,1]
console.log(containsDuplicate(nums)) // true