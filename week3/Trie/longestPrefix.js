

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

   
   
    // Find the longest common prefix
    findLongestPrefix() {
        let current = this.root;
        let prefix = "";

        while (true) {
            const keys = Object.keys(current.children);

            // Stop if there are multiple children or if we've reached the end of a word
            if (keys.length !== 1 || current.isEndOfWord) {
                break;
            }

            // Append the only child to the prefix and move down the Trie
            prefix += keys[0];
            current = current.children[keys[0]];
        }

        return prefix;
    }

    
}

const trie = new Trie();


trie.insert("flower");
trie.insert("flow");
trie.insert("flight");

console.log(trie.findLongestPrefix()); // Output: "fl"


