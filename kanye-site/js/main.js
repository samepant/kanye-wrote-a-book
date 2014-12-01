var newValues = function (oldCoord) {
  var charArray = oldCoord.split('');
  var newArray = [];

  for (var i = 0; i < charArray.length; i++) {
    var item = charArray[i];
    var nextKey = i + 1;
    var nextItem = charArray[nextKey];
    var numCheck = parseInt(item);

    if (!isNaN(numCheck) && (Math.random() > 0.99)) {
      if (nextItem === ',' || nextItem === '-' || nextItem === '.') {
        item = (numCheck + (Math.random() * 1));
        item = Math.ceil(item);
        item = item.toString();
      }
    }
    newArray.push(item);
  }

  return newArray.join('');
};

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex ;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}