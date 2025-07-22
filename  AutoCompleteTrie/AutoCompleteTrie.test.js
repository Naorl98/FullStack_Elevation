const AutoCompleteTrie = require('./autocomplete');

describe('AutoCompleteTrie', () => {
  let trie;

  beforeEach(() => {
    trie = new AutoCompleteTrie();
  });

  test('adds a single word and finds it', () => {
    trie.addWord('cat');
    expect(trie.findWord('cat')).toBe(true);
  });

  test('returns false for non-existing word', () => {
    trie.addWord('cat');
    expect(trie.findWord('dog')).toBe(false);
  });

  test('handles prefixes correctly', () => {
    trie.addWord('cat');
    trie.addWord('car');
    trie.addWord('card');
    expect(trie.predictWords('ca')).toEqual(expect.arrayContaining(['cat', 'car', 'card']));
  });

  test('predicts empty array for non-existing prefix', () => {
    trie.addWord('cat');
    expect(trie.predictWords('xy')).toEqual([]);
  });

  test('predicts only words with correct prefix', () => {
    trie.addWord('cat');
    trie.addWord('dog');
    trie.addWord('car');
    expect(trie.predictWords('ca')).toEqual(expect.arrayContaining(['cat', 'car']));
  });

  test('reuses prefix path (e.g. run/running)', () => {
    trie.addWord('run');
    trie.addWord('running');
    expect(trie.findWord('run')).toBe(true);
    expect(trie.findWord('running')).toBe(true);
    expect(trie.predictWords('run')).toEqual(expect.arrayContaining(['run', 'running']));
  });

  test('handles case insensitivity', () => {
    trie.addWord('Cat');
    expect(trie.findWord('cat')).toBe(true);
    expect(trie.findWord('CAT')).toBe(true);
  });

  test('usage count starts at 0 and increments', () => {
    trie.addWord('cat');
    expect(trie.use('cat')).toBe(true);
    expect(trie.predictWords('ca')).toEqual(['cat']);
  });

  test('usage count impacts sorting', () => {
    trie.addWord('car');
    trie.addWord('cat');
    trie.use('car');
    trie.use('car');
    expect(trie.predictWords('ca')).toEqual(['car', 'cat']);
  });

  test('use fails for non-existing word', () => {
    expect(trie.use('banana')).toBe(false);
  });

  test('supports special characters in words', () => {
    trie.addWord('what?');
    expect(trie.findWord('what?')).toBe(true);
    expect(trie.predictWords('wh')).toEqual(expect.arrayContaining(['what?']));
  });

  test('getRemainingTree returns correct subtree', () => {
    trie.addWord('cat');
    const sub = trie.getRemainingTree('ca');
    expect(sub).not.toBeNull();
    expect(Object.keys(sub.children)).toContain('t');
  });

  test('allWordsHelper collects correct words', () => {
    trie.addWord('dog');
    trie.addWord('doll');
    const words = [];
    trie.allWordsHelper('do', trie.getRemainingTree('do'), words);
    const wordList = words.map(w => w.word);
    expect(wordList).toEqual(expect.arrayContaining(['dog', 'doll']));
  });
});
