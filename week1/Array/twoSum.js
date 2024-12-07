

function twoSum(nums, target) {
    const map = new Map(); // Create a hash map to store numbers and their indices

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i]; // Find the complement of the current number

        if (map.has(complement)) {
            // If the complement exists in the map, return the indices
            return [map.get(complement), i];
        }

        // Otherwise, add the current number and its index to the map
        map.set(nums[i], i);
    }

    return []; // This won't execute as per the problem's guarantee of one solution
}

let nums = [2,7,11,15], target = 9
console.log(twoSum(nums, target)); // Output: [0,1]