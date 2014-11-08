if (process.argv.length < 3) {
  console.log("Please pass in a text file to parse, probably the kanye.txt")
}

var fs = require('fs');
var fileToWrite = 'kanye-important-words.txt';
fs.writeFile(fileToWrite, '');
var gloss = require('glossary');
var LineByLineReader = require('line-by-line'),
    lr = new LineByLineReader(process.argv[2]);

lr.on('error', function (err) {
  console.log("Error!", err);
});

lr.on('line', function (line) {
  var keywords = gloss.extract(line);
  for (var i = 0; i < keywords.length; i++) {
    var word = keywords[i] + ' ';
    if (i === (keywords.length - 1) ) {
      word += '\n';
    }
    fs.appendFile(fileToWrite, word);
  }
});

lr.on('end', function () {
  console.log("Finished processing file");
});