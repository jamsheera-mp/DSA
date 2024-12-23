
//Using normal built-in method(less efficient)
//Tc  - o(n)  ,SC - o(n)


//function isPalindrome(s){
//  s = s.replace(/[^a-zA-Z0-9]/g,'').toLowerCase()
// return s === s.split('').reverse().join('');
//}




//Two pointer approach - more efficient(optimal solution)
//Tc  - o(n)  ,SC - o(1)

function isPalindrome(s) {
    let l = 0   // Left pointer starts at the beginning
    let r = s.length - 1  // Right pointer starts at the end

    while (l < r) {
        // Skip non-alphanumeric characters for the left pointer
        while (l < r && !alphanum(s[l])) l++

        // Skip non-alphanumeric characters for the right pointer
        while (l < r && !alphanum(s[r])) r--

           // Compare characters (case-insensitive)
        if (s[l].toLowerCase() !== s[r].toLowerCase())  return false

        l++
        r--
     
    
    }
    return true   // If we reach here, the string is a palindrome
}

// Helper function to check if a character is alphanumeric
function alphanum(c) {
    const code = c.charCodeAt(0)
    return (
        (code >= 'a'.charCodeAt(0) && code <= 'z'.charCodeAt(0)) || // Lowercase letters
        (code >= 'A'.charCodeAt(0) && code <= 'Z'.charCodeAt(0)) || // Uppercase letters
        (code >= '0'.charCodeAt(0) && code <= '9'.charCodeAt(0))    // Digits
    );
}










const s = "A man, a plan, a canal: Panama"
console.log(isPalindrome(s)) // true