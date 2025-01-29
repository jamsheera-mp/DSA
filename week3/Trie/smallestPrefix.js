class TrieNode {
    constructor() {
        this.children = {}; // Store child nodes
        this.count = 0; // Count how many words pass through this node
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
            if (!current.children[char]) {
                current.children[char] = new TrieNode();
            }
            current = current.children[char];
            current.count++; // Increment the count at each node
        }
    }

    // Find the smallest unique prefix for a word
    findSmallestPrefix(word) {
        let current = this.root;
        let prefix = "";

        for (let char of word) {
            prefix += char;
            current = current.children[char];

            // If count is 1, this is a unique prefix
            if (current.count === 1) {
                return prefix;
            }
        }

        return prefix; // In case all characters are needed for uniqueness
    }
}

// Function to find smallest unique prefixes for a list of words
function findSmallestPrefixes(words) {
    const trie = new Trie();

    // Insert all words into the Trie
    for (let word of words) {
        trie.insert(word);
    }

    // Find the smallest prefix for each word
    const result = {};
    for (let word of words) {
        result[word] = trie.findSmallestPrefix(word);
    }

    return result;
}

// Example Usage
const words = ["dog", "dove", "duck", "cat", "car"];
console.log(findSmallestPrefixes(words));
// Output: { dog: 'dog', dove: 'dov', duck: 'duc', cat: 'cat', car: 'car' }
