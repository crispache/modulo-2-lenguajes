console.log("************** DELIVERABLE 01 *********************");
console.log("");

const head = <T>(collection: T[]): T => {
    const [ firstElement ] = collection;
    return firstElement;
}

const tail = <T>(collection: T[]) => {
    const [ first, ...items] = collection;
    return items;
}


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

const singers = tail<string>(singersName)
console.log('Singers -> ', singers)

const restScores = tail<number>(scores);
console.log('Rest Scores -> ', restScores)

const restMixingResult = tail(arrayMixing);
console.log('Rest Mixing result -> ', restMixingResult)