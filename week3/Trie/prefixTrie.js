class TrieNode {
    constructor() {
        this.children = {}; // Store child nodes
        this.isEndOfWord = false; // Marks the end of a word
    }
}

class PrefixTrie {
    constructor() {
        this.root = new TrieNode(); // Initialize the root node
    }

    // Insert a word into the Trie
    insert(word) {
        let current = this.root;
        for (const char of word) {
            if (!current.children[char]) {
                current.children[char] = new TrieNode(); // Create a new node if it doesn't exist
            }
            current = current.children[char];
        }
        current.isEndOfWord = true; // Mark the end of the word
    }

    // Search for an exact word in the Trie
    search(word) {
        let current = this.root;
        for (const char of word) {
            if (!current.children[char]) {
                return false; // If character is not found, word doesn't exist
            }
            current = current.children[char];
        }
        return current.isEndOfWord; // Return true if it's the end of a word
    }

    // Check if any word starts with the given prefix
    startsWith(prefix) {
        let current = this.root;
        for (const char of prefix) {
            if (!current.children[char]) {
                return false; // If character is not found, prefix doesn't exist
            }
            current = current.children[char];
        }
        return true; // Prefix exists
    }

    // Find all words that start with a given prefix
    findWordsWithPrefix(prefix) {
        let current = this.root;
        for (const char of prefix) {
            if (!current.children[char]) {
                return []; // If the prefix doesn't exist, return an empty array
            }
            current = current.children[char];
        }

        // Collect all words starting from the current node
        const words = [];
        this.collectWords(current, prefix, words);
        return words;
    }

    // Helper function to collect words (DFS)
    collectWords(node, prefix, words) {
        if (node.isEndOfWord) {
            words.push(prefix); // Add the word to the list
        }

        for (const char in node.children) {
            this.collectWords(node.children[char], prefix + char, words); // Recur for each child
        }
    }
}

// Example Usage
const prefixTrie = new PrefixTrie();

// Insert words into the Trie
prefixTrie.insert("apple");
prefixTrie.insert("app");
prefixTrie.insert("application");
prefixTrie.insert("apt");
prefixTrie.insert("bat");
prefixTrie.insert("batch");

// Search for exact words
console.log(prefixTrie.search("app")); // true
console.log(prefixTrie.search("apply")); // false

// Check prefixes
console.log(prefixTrie.startsWith("ap")); // true
console.log(prefixTrie.startsWith("bat")); // true
console.log(prefixTrie.startsWith("cat")); // false

// Find words with a given prefix
console.log(prefixTrie.findWordsWithPrefix("ap")); // ["apple", "app", "application", "apt"]
console.log(prefixTrie.findWordsWithPrefix("bat")); // ["bat", "batch"]
console.log(prefixTrie.findWordsWithPrefix("ca")); // []
