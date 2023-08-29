console.log("************** DELIVERABLE 01 *********************");
console.log("");


const head = <T>(collection: T[]): T => {
    const [ firstElement ] = collection;
    return firstElement;
}

const tail = <T>(collection: T[]): T[] => {
    const [, ...items] = collection;
    return items;
}

const init = <T>(collection: T[]): T[] => {
    return collection?.slice(0, collection.length - 1)
} 

const last = <T>(collection: T[]): T => collection?.[collection?.length - 1];



const singersName: Array<string> = ['Beyoncé', 'Michael Jackson', 'Elvis Presley', 'Aretha Franklin', 'Whitney Houston']
const scores: Array<number> = [ 0, 3, 5, 7, 10 ];
const arrayMixing = ['Cris', null, 22, null, 'Santi']

console.log("**** Array 1 ****" , singersName)
console.log("**** Array 2 ****", scores)
console.log("**** Array 3 ****", arrayMixing)
console.log("");


console.log("************** Example function head *********************");

const firstSinger = head<string>(singersName);
console.log('Array 1 (Head) -> ', firstSinger)

const firstScore = head<number>(scores)
console.log('Array 2 (Head) -> ', firstScore)

const firstMixingResult = head(arrayMixing)
console.log('Array 3 (Head) -> ', firstMixingResult)


console.log("");
console.log("************** Example function tail ********************* ");

const singers = tail<string>(singersName);
console.log('Array 1 (Tail) -> ', singers);

const restScores = tail<number>(scores);
console.log('Array 2 (Tail) -> ', restScores);

const restMixingResult = tail(arrayMixing);
console.log('Array 3 (Tail) -> ', restMixingResult);



console.log("");
console.log("************** Example function init ********************* ");

const initSingers = init<string>(singersName);
console.log('Array 1 (Init) -> ', initSingers);

const initScores = init<number>(scores);
console.log('Array 2 (Init) -> ', initScores);

const initMixingResult = init(arrayMixing);
console.log('Array 3 (Init) -> ', initMixingResult);


console.log("");
console.log("************** Example function last ********************* ");

const lastSinger = last<string>(singersName);
console.log('Array 1 (Last) -> ', lastSinger);

const lastScore = last<number>(scores);
console.log('Array 2 (Last) -> ', lastScore);

const lastMixingResult = last(arrayMixing);
console.log('Array 3 (Last) -> ', lastMixingResult);