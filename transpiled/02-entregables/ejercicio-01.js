console.log("************** DELIVERABLE 01 *********************");
var head = function (collection) {
    var firstElement = collection[0];
    return firstElement;
};
var singersName = ['Beyoncé', 'Michael Jackson', 'Elvis Presley', 'Aretha Franklin', 'Whitney Houston'];
var singer = head(singersName);
console.log('Best singer -> ', singer);
var scores = [0, 3, 5, 7, 10];
var score = head(scores);
console.log('Bad score -> ', score);
var arrayMixing = ['Cris', null, 22, null, 'Santi'];
var mixingResult = head(arrayMixing);
console.log('Mixing result -> ', mixingResult);
