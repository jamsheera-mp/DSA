class TrieNode {
    constructor() {
        this.children = {}; // Store children nodes
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode(); // Initialize the root node
    }

    // Insert a substring into the Trie and return its length if non-repeating
    insertSubstring(str, start) {
        let current = this.root;
        let length = 0;
        const seen = new Set();

        for (let i = start; i < str.length; i++) {
            const char = str[i];

            // If the character is already seen, stop adding to Trie
            if (seen.has(char)) {
                break;
            }

            // Mark the character as seen
            seen.add(char);

            // Create a new node if the character doesn't exist in the Trie
            if (!current.children[char]) {
                current.children[char] = new TrieNode();
            }

            current = current.children[char];
            length++; // Increment length as we add characters
        }

        return length; // Return the length of the non-repeating substring
    }
}

function findLongestNonRepeatingSubstring(str) {
    const trie = new Trie();
    let longest = "";
    let maxLength = 0;

    // Iterate through each starting index of the string
    for (let i = 0; i < str.length; i++) {
        // Insert substrings starting at index `i` and get the length of the non-repeating part
        const length = trie.insertSubstring(str, i);

        // Update the longest substring if a longer one is found
        if (length > maxLength) {
            maxLength = length;
            longest = str.substring(i, i + length);
        }
    }

    return longest;
}

// Example Usage
console.log(findLongestNonRepeatingSubstring("abcabcbb")); // Output: "abc"
console.log(findLongestNonRepeatingSubstring("bbbbb"));    // Output: "b"
console.log(findLongestNonRepeatingSubstring("pwwkew"));   // Output: "wke"
console.log(findLongestNonRepeatingSubstring("abcdefg"));  // Output: "abcdefg"
