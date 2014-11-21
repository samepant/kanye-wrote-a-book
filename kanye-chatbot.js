var util = require('util');
var fs = require('fs');

var markov = require('markov');
var m = markov(2);

var s = fs.createReadStream(__dirname + '/kanye.txt');
m.seed(s, function () {
  var stdin = process.openStdin();
  util.print('> ');

  stdin.on('data', function (line) {
    var res = m.respond(line.toString()).join(' ');
    res = res.charAt(0).toUpperCase() + res.slice(1);
    res += '.';
    console.log(res);
    util.print('> ');
  });
});