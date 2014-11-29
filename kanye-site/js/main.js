var newValues = function (oldCoord) {
  var charArray = oldCoord.split('');
  var newArray = [];

  for (var i = 0; i < charArray.length; i++) {
    var item = charArray[i];
    //console.log(item + " : " + isNaN(item));
    var numCheck = parseInt(item);

    if (!isNaN(numCheck) && (Math.random() > 0.5)) {
      item = (item + (Math.random() * 1));
      item = Math.ceil(item);
    }
    newArray.push(item);
  }

  return newArray.join('');
};
