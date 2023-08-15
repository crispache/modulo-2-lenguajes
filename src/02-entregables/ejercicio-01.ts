console.log("************** DELIVERABLE 01 *********************");

const head = <T>(collection: T[]): T => {
    const [ firstElement ] = collection;
    return firstElement;
}

const singersName: Array<string> = ['Beyoncé', 'Michael Jackson', 'Elvis Presley', 'Aretha Franklin', 'Whitney Houston']
const singer = head<string>(singersName);
console.log('Best singer -> ', singer)


const scores: Array<Number> = [ 0, 3, 5, 7, 10 ];
const score = head<Number>(scores)
console.log('Bad score -> ', score)


const arrayMixing = ['Cris', null, 22, null, 'Santi']
const mixingResult = head(arrayMixing)
console.log('Mixing result -> ', mixingResult)
