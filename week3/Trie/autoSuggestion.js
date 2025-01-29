

class TrieNode {
    constructor() {
        this.children = {}; // Store children nodes
        this.isEndOfWord = false; // Marks the end of a word
    }
}


class Trie {
    constructor() {
        this.root = new TrieNode(); // Initialize the root node
    }

    // Insert a word into the Trie
    insert(word) {
        let current = this.root;
        for (let char of word) {
            // If the character doesn't exist in children, create a new node
            if (!current.children[char]) {
                current.children[char] = new TrieNode();
            }
            current = current.children[char];
        }
        current.isEndOfWord = true; // Mark the end of the word
    }

    

    

    // Search for all words with the given prefix
    autoSuggest(prefix) {
        let current = this.root;

        // Navigate to the node representing the last character of the prefix
        for (const char of prefix) {
            if (!current.children[char]) {
                return []; // If the prefix is not found, return an empty array
            }
            current = current.children[char];
        }

        // Collect all words starting from this node
        const suggestions = [];
        this.collectWords(current, prefix, suggestions);
        return suggestions;
    }

    // Helper function to collect words (DFS)
    collectWords(node, prefix, suggestions) {
        if (node.isEndOfWord) {
            suggestions.push(prefix); // If it's the end of a word, add to suggestions
        }

        for (const char in node.children) {
            this.collectWords(node.children[char], prefix + char, suggestions); // Recur for each child
        }
    }


    
}

const trie = new Trie();




trie.insert("cart");
trie.insert("care");
trie.insert("dog");
trie.insert("dove");

// Get auto-suggestions for a prefix
console.log(trie.autoSuggest("ca")); // Output: ["cart", "care"]
console.log(trie.autoSuggest("do")); // Output: ["dog", "dove"]
console.log(trie.autoSuggest("x"));  // Output: []

console.log(trie.findLongestPrefix());
