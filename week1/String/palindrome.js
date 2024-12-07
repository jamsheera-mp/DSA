

function isPalindrome(s){
    return s === s.split('').reverse().join('');
}

let str = "radar";
console.log(isPalindrome(str)); // true