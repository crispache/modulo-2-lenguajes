console.log("************** DELIVERABLE 02 *********************");
console.log("");


console.log("************** Example function concatBase (a, b) *********************");
const concatBase = <T>(a: T[], b: T[]): T[] => {
    /* if (a && b) {
        return [...a, ...b]
    }  else if (a && !b || !a && b) {
        return a ? [...a] : [...b]
    } else {
        return []
    } */
    return a && b ? [...a, ...b] : a ? [...a] : b ? [...b] : [];
};


const femaleSingers: Array<string> = ['Beyoncé', 'Aretha Franklin', 'Whitney Houston', 'Tina Turner']
const maleSingers: Array<string> = ['Michael Jackson', 'Elvis Presley', 'Freddie Mercury']

const bestSingers = concatBase<string>(femaleSingers, maleSingers);
console.log('Resultado concatBase -> ', bestSingers)


console.log("");
console.log("************** Example function concatMultipleArrays (a, b, ...) *********************");


const concatMultipleArrays = <T>(...someArrays: T[][]): T[] => {
    let result: T[] = [];
    someArrays.forEach( (simpleArray: T[]) => {
        if(simpleArray) {
            result = [...result, ...simpleArray]
        }
    });
    return result
};


const multipleArrays = concatMultipleArrays<string>(femaleSingers, maleSingers, ['Rihanna'], ['Lenny Kravitz'], undefined, null);
console.log('Resultado concatMultipleArrays -> ', multipleArrays)