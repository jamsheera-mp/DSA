


class TrieNode{
    constructor(){
        this.children = {}
        this.isEndOfWord = false
    }
}

class Trie{
    constructor(){
        this.root = new TrieNode()
    }
    insert(word){
        let current = this.root
        for(let char of word){
            if(!current.children[char]){
                current.children[char] = new TrieNode()
            }
            current = current.children[char]
        }
        current.isEndOfWord = true
    }
    search(word){
        let current = this.root
        for(let char of word){
            if(!current.children[char]){
                return false
            }
            current = current.children[char]
        }
        return current.isEndOfWord
    }
    startsWith(prefix){
        let current  = this.root
        for(let char of prefix){
            if(!current.children[char]){
                return false
            }
            current = current.children[char]
        }
        return true
    }
    autoComplete(prefix){
        let current = this.root
        for(let char of prefix){
            if(!current.children[char]){
                return []
            }
            current = current.children[char]
        }
        const result = []
        const collectWords = (node,currentWord)=>{
            if(node.isEndOfWord){
                result.push(currentWord)
            }
        }
        for(let char in node.children){
            collectWords(node.children[char],currentWord + char)
        }
        collectWords(current,prefix)
        return result
    }
}

const trie = new Trie();

trie.insert("apple");
trie.insert("app");
trie.insert("banana");

console.log(trie.search("apple")); // true
console.log(trie.search("app")); // true
console.log(trie.search("appl")); // false (not a complete word)
console.log(trie.startsWith("app")); // true
console.log(trie.startsWith("ban")); // true
console.log(trie.startsWith("cat")); // false
