console.log("************** DELIVERABLE 01 *********************");
console.log("");

//* TODO: Tipar <T>(collection: T[]): T ya q se repite

const head = <T>(collection: T[]): T => {
    const [ firstElement ] = collection;
    return firstElement;
}

const tail = <T>(collection: T[]): T[] => {
    const [ first, ...items] = collection;
    return items;
}

const init = <T>(collection: T[]): T[] => {
    return collection?.slice(0, collection.length - 1)
} 

const last = <T>(collection: T[]): T => collection?.[collection?.length - 1];



const singersName: Array<string> = ['Beyoncé', 'Michael Jackson', 'Elvis Presley', 'Aretha Franklin', 'Whitney Houston']
const scores: Array<number> = [ 0, 3, 5, 7, 10 ];
const arrayMixing = ['Cris', null, 22, null, 'Santi']

console.log("************** Example function head *********************");

const firstSinger = head<string>(singersName);
console.log('First singer -> ', firstSinger)

const firstScore = head<number>(scores)
console.log('First score -> ', firstScore)

const firstMixingResult = head(arrayMixing)
console.log('First Mixing result -> ', firstMixingResult)


console.log("");
console.log("************** Example function tail ********************* ");

const singers = tail<string>(singersName);
console.log('Rest Singers -> ', singers);

const restScores = tail<number>(scores);
console.log('Rest Scores -> ', restScores);

const restMixingResult = tail(arrayMixing);
console.log('Rest Mixing result -> ', restMixingResult);



console.log("");
console.log("************** Example function init ********************* ");

const initSingers = init<string>(singersName);
console.log('init Singers -> ', initSingers);

const initScores = init<number>(scores);
console.log('init Scores -> ', initScores);

const initMixingResult = init(arrayMixing);
console.log('init Mixing result -> ', initMixingResult);


console.log("");
console.log("************** Example function last ********************* ");

const lastSinger = last<string>(singersName);
console.log('Last Singer -> ', lastSinger);

const lastScore = last<number>(scores);
console.log('Last Score -> ', lastScore);

const lastMixingResult = last(arrayMixing);
console.log('Last Mixing result -> ', lastMixingResult);