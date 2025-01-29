

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

    // Search for a word in the Trie
    search(word) {
        let current = this.root;
        for (let char of word) {
            if (!current.children[char]) {
                return false; // If character is not found, word doesn't exist
            }
            current = current.children[char];
        }
        return current.isEndOfWord; // Check if it's the end of a word
    }

    // Check if any word in the Trie starts with the given prefix
    startsWith(prefix) {
        let current = this.root;
        for (let char of prefix) {
            if (!current.children[char]) {
                return false; // If character is not found, no word starts with prefix
            }
            current = current.children[char];
        }
        return true; // Prefix exists
    }
    

    


    // Display all words in the Trie
    displayWords(node = this.root, prefix = "", words = []) {
        if (node.isEndOfWord) {
            words.push(prefix); // If end of word, add prefix to the list
        }

        for (let char in node.children) {
            this.displayWords(node.children[char], prefix + char, words); // Recursive call
        }

        return words;
    }
}

const trie = new Trie();


trie.insert("flower");
trie.insert("flow");
trie.insert("flight");

console.log(trie.findLongestPrefix()); // Output: "fl"
// Insert words into the Trie
trie.insert("cat");
trie.insert("can");
trie.insert("bat");
trie.insert("batman");

// Search for words
console.log(trie.search("cat")); // true
console.log(trie.search("car")); // false

// Check prefixes
console.log(trie.startsWith("ca")); // true
console.log(trie.startsWith("bat")); // true
console.log(trie.startsWith("bar")); // false

// Display all words
console.log(trie.displayWords()); // ['cat', 'can', 'bat', 'batman']
// Insert words into the Trie

trie.insert("cart");
trie.insert("care");
trie.insert("dog");
trie.insert("dove");

// Get auto-suggestions for a prefix
console.log(trie.autoSuggest("ca")); // Output: ["cat", "car", "cart", "care"]
console.log(trie.autoSuggest("do")); // Output: ["dog", "dove"]
console.log(trie.autoSuggest("x"));  // Output: []

console.log(trie.findLongestPrefix());
