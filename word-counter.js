var natural = require('natural'),
    fs = require('fs'),
    words,
    tokenizer = new natural.WordTokenizer(),
    FrequencyList = require('frequency-list'),
    wordFreq = new FrequencyList,
    posFreq = new FrequencyList,
    pos = require('pos');

if (process.argv.length < 3) {
  console.log("Please pass in a text file to parse")
}

words = fs.readFileSync(process.argv[2], 'utf-8');

tokenedWords = tokenizer.tokenize(words);

for (var i = 0; i < tokenedWords.length; i++) {
  var singleWord = tokenedWords[i];
  wordFreq.add(singleWord);
}

var taggedWords = new pos.Tagger().tag(tokenedWords),
    nouns = [],
    adjectives = [],
    properNouns = [],
    persPron = [],
    verbsBase = [],
    adverb = [],
    gerund = [],
    determiner = [],
    interject = [],
    modal = [],
    conjunct = [];

for (var i = 0; i < taggedWords.length; i++) {
  var taggedData = taggedWords[i];
  posFreq.add(taggedData[1]);
};