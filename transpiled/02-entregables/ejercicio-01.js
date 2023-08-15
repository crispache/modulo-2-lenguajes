console.log("************** DELIVERABLE 01 *********************");
console.log("");
var head = function (collection) {
    var firstElement = collection[0];
    return firstElement;
};
var tail = function (collection) {
    var first = collection[0], items = collection.slice(1);
    return items;
};
var init = function (collection) {
    return collection === null || collection === void 0 ? void 0 : collection.slice(0, collection.length - 1);
};
var singersName = ['Beyoncé', 'Michael Jackson', 'Elvis Presley', 'Aretha Franklin', 'Whitney Houston'];
var scores = [0, 3, 5, 7, 10];
var arrayMixing = ['Cris', null, 22, null, 'Santi'];
console.log("************** Example function head *********************");
var firstSinger = head(singersName);
console.log('First singer -> ', firstSinger);
var firstScore = head(scores);
console.log('First score -> ', firstScore);
var firstMixingResult = head(arrayMixing);
console.log('First Mixing result -> ', firstMixingResult);
console.log("");
console.log("************** Example function tail ********************* ");
var singers = tail(singersName);
console.log('Rest Singers -> ', singers);
var restScores = tail(scores);
console.log('Rest Scores -> ', restScores);
var restMixingResult = tail(arrayMixing);
console.log('Rest Mixing result -> ', restMixingResult);
console.log("");
console.log("************** Example function init ********************* ");
var initSingers = init(singersName);
console.log('init Singers -> ', initSingers);
var initScores = init(scores);
console.log('init Scores -> ', initScores);
var initMixingResult = init(arrayMixing);
console.log('init Mixing result -> ', initMixingResult);
