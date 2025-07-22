class AutoCompleteTrie {
    constructor(value = '') {
        this.value = value                    
        this.children = {}                  
        this.endOfWord = false               
        this.usageCount = 0             
    }

    addWord(word) {
        let current = this                        
        word = word.toLowerCase()                 
    
        for (const char of word) {               
            if (!current.children[char]) {      
                current.children[char] = new AutoCompleteTrie(char)
            }
            current = current.children[char]   
        }
    
        current.endOfWord = true                
        current.usageCount = current.usageCount || 0
    }
    findWord(word) {
        let current = this
        word = word.toLowerCase()
    
        for (const char of word) {
            if (!current.children[char]) {
                return false                   
            }
            current = current.children[char]
        }
    
        return current.endOfWord                
    }
    getRemainingTree(prefix) {
        let current = this
        prefix = prefix.toLowerCase()
    
        for (const char of prefix) {
            if (!current.children[char]) {
                return null                      
            }
            current = current.children[char]
        }
    
        return current                            
    }
    
    allWordsHelper(prefix, node, words) {
        if (node.endOfWord) {
            words.push({ word: prefix, freq: node.usageCount })
        }
    
        for (const char in node.children) {
            this.allWordsHelper(prefix + char, node.children[char], words)
        }
    }
    predictWords(prefix) {
        const subtree = this.getRemainingTree(prefix)
        const suggestions = []
    
        if (subtree) {
            this.allWordsHelper(prefix, subtree, suggestions)
        }
    
        return suggestions
            .sort((a, b) => b.freq - a.freq)
            .map(obj => obj.word)
    }
    
    use(word) {
        let current = this
        word = word.toLowerCase()
    
        for (const char of word) {
            if (!current.children[char]) return false
            current = current.children[char]
        }
    
        if (current.endOfWord) {
            current.usageCount++
            return true
        }
    
        return false
    }
    
}

module.exports = AutoCompleteTrie;
