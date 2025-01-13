
//let str= 'abcdabecd'
//op- abcde

function getUniqueCharacters(str) {
    let seen = new Set(); // To keep track of characters we've already added
    let result = ''; // To build the result string

    for (let char of str) {
        if (!seen.has(char)) { // If the character is not already in the set
            seen.add(char);   // Add it to the set
            result += char;   // Append it to the result string
        }
    }

    return result;
}

let str = 'abcdabecd';
console.log(getUniqueCharacters(str)); // Output: "abcde"



//[43, 5746, 678]
//output should be [876, 6475, 34]


function reverseNumbers(arr) {
    return arr.map(num => {
        let reversed = 0;
        while (num > 0) {
            // Get the last digit of the number
            let digit = num % 10;

            // Append the digit to the reversed number
            reversed = reversed * 10 + digit;

            // Remove the last digit from the number
            num = Math.floor(num / 10);
        }
        return reversed;
    });
}

const input = [43, 5746, 678];
const output = reverseNumbers(input);
console.log(output); // Output: [876, 6475, 34]

function reverseNumbersWithStack(arr) {
    return arr.map(num => {
        let stack = [];
        let reversed = 0;

        // Push each digit of the number into the stack
        while (num > 0) {
            stack.push(num % 10); // Push the last digit
            num = Math.floor(num / 10); // Remove the last digit
        }

        // Pop digits from the stack to form the reversed number
        let multiplier = 1;
        while (stack.length > 0) {
            reversed += stack.pop() * multiplier;
            multiplier *= 10;
        }

        return reversed;
    });
}





function findUniqueElements(s) {
    let map = new Map();
    let res = '';

    // Populate the map with character frequencies
    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        if (map.has(char)) {
            map.set(char, map.get(char) + 1);
        } else {
            map.set(char, 1); // Initialize count to 1 for first occurrence
        }
    }

    // Find characters that appear only once
    for (let [key, value] of map) {
        if (value === 1) {
            res += key;
        }
    }
    return res;
}

console.log(findUniqueElements('abcdabedc')); // Output: "e"




