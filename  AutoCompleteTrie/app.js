const readline = require('readline');
const AutoCompleteTrie = require('./autocomplete');

const trie = new AutoCompleteTrie();

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("=== AutoComplete Trie Console ===");
console.log("Type 'help' for commands\n");

rl.on('line', (input) => {
    const [cmd, ...args] = input.trim().split(' ');
    const arg = args.join(' ');

    switch (cmd) {
        case 'add':
            trie.addWord(arg);
            console.log(`✓ Added '${arg}'`);
            break;
        case 'find':
            console.log(trie.findWord(arg) ? `✓ '${arg}' exists` : `✗ '${arg}' not found`);
            break;
        case 'complete':
            const suggestions = trie.predictWords(arg);
            console.log(`Suggestions for '${arg}': ${suggestions.join(', ')}`);
            break;
        case 'use':
            trie.use(arg);
            console.log(`✓ Incremented usage for '${arg}'`);
            break;
        case 'help':
            console.log(`Commands:
  add <word>         - Add word to dictionary
  find <word>        - Check if word exists
  complete <prefix>  - Get completions
  use <word>         - Increment word usage
  help               - Show this message
  exit               - Quit program`);
            break;
        case 'exit':
            console.log("Goodbye!");
            rl.close();
            break;
        default:
            console.log("Unknown command. Type 'help'");
    }
});
