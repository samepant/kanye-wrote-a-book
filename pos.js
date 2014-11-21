var pos = require('pos');

if (process.argv.length < 3) {
  console.log("Please pass in a word to test")
}

var arguments = process.argv;

arguments.splice(0,2);

var taggedWords = new pos.Tagger().tag(arguments);

for (var i = 0; i < taggedWords.length; i++) {
 var tags = taggedWords[i];
 console.log(tags[0] + ' : ' + tags[1]);
};
