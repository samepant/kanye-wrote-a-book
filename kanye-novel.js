var util = require('util');
var fs = require('fs');

var markov = require('markov');
var m = markov(2);

var kanyeIsms = fs.createWriteStream('kanye-isms.txt');
var s = fs.createReadStream(__dirname + '/kanye.txt');

m.seed(s, function () {
  var test = m.pick();
  var res = m.fill(test, 20).join(' ');
  var key = res;
  for (var i = 0; i < 2500; i++) {
    newKey = m.pick();
    newResponse = m.fill(newKey, 20).join(' ');
    newResponse = newResponse.charAt(0).toUpperCase() + newResponse.slice(1);
    newResponse += '.\n';
    kanyeIsms.write(newResponse);
    console.log('wrote ' + [i]);
  };
  kanyeIsms.end();
});