


//input:[43, 5746, 678]
//output should be [876, 6475, 34]

let nums = [43, 5746, 678];

function reverseNumber(num) {
    let reversed = 0;
    while (num > 0) {
        let digit = num % 10; // Get the last digit
        reversed = reversed * 10 + digit; // Append the digit to the reversed number
        num = Math.floor(num / 10); // Remove the last digit
    }
    return reversed;
}

// Reverse each number and reverse the final array order
let reversedNums = [];
for (let i = nums.length - 1; i >= 0; i--) {
    reversedNums.push(reverseNumber(nums[i]));
}

console.log(reversedNums);

//------------------------------------------------------

let nums1 = [43, 5746, 678];

function reverseNumberUsingStack(num) {
    let stack = [];
    let reversed = 0;

    // Push each digit onto the stack
    while (num > 0) {
        stack.push(num % 10);
        num = Math.floor(num / 10);
    }

    // Pop digits from the stack to form the reversed number
    let multiplier = 1;
    while (stack.length > 0) {
        reversed += stack.pop() * multiplier;
        multiplier *= 10;
    }

    return reversed;
}

// Reverse each number and reverse the final array order
let reversedNums1 = [];
for (let i = nums.length - 1; i >= 0; i--) {
    reversedNums1.push(reverseNumberUsingStack(nums[i]));
}

console.log(reversedNums);

