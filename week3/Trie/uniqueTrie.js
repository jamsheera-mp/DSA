

class TrieNode {
    constructor() {
        this.children = {}; // Stores child nodes
        this.count = 0; // Tracks occurrences
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(word) {
        let node = this.root;
        for (let char of word) {
            if (!node.children[char]) {
                node.children[char] = new TrieNode();
            }
            node = node.children[char];
            
            node.count++; // Increment count for each occurrence
        }
    }

    findUniqueCharacters() {
        let uniqueChars = [];
        
        function traverse(node, char) {
            if (char && node.count === 1) { // Unique character if count is 1
                uniqueChars.push(char);
                
            }
            for (let child in node.children) {
                traverse(node.children[child], child);
            }
        }

        traverse(this.root, null);
        return uniqueChars;
    }
}

// Example Usage
let trie = new Trie();
let str = "banana";
trie.insert(str);

console.log(trie.findUniqueCharacters()); // Output: ['b']
