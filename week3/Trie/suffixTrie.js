class TrieNode {
    constructor() {
        this.children = {}; // Store child nodes
        this.isEndOfWord = false; // Marks the end of a word
    }
}

class SuffixTrie {
    constructor() {
        this.root = new TrieNode(); // Initialize the root node
    }

    // Insert all suffixes of a word into the Trie
    insert(word) {
        for (let i = 0; i < word.length; i++) {
            this.insertSuffix(word.substring(i));
        }
    }

    // Helper function to insert a suffix into the Trie
    insertSuffix(suffix) {
        let current = this.root;
        for (const char of suffix) {
            if (!current.children[char]) {
                current.children[char] = new TrieNode(); // Create a new node if it doesn't exist
            }
            current = current.children[char];
        }
        current.isEndOfWord = true; // Mark the end of the suffix
    }

    // Check if a suffix exists in the Trie
    hasSuffix(suffix) {
        let current = this.root;
        for (const char of suffix) {
            if (!current.children[char]) {
                return false; // If a character in the suffix is missing, return false
            }
            current = current.children[char];
        }
        return true; // The suffix exists
    }
}

// Example Usage
const suffixTrie = new SuffixTrie();

// Insert a word into the Suffix Trie
suffixTrie.insert("banana");

// Check for suffixes
console.log(suffixTrie.hasSuffix("ana")); // true
console.log(suffixTrie.hasSuffix("nana")); // true
console.log(suffixTrie.hasSuffix("banana")); // true
console.log(suffixTrie.hasSuffix("ban")); // false
console.log(suffixTrie.hasSuffix("apple")); // false
