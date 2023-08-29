console.log("************** DELIVERABLE 02 *********************");

const femaleSingers: Array<string> = ['Beyoncé', 'Aretha Franklin', 'Whitney Houston', 'Tina Turner']
const maleSingers: Array<string> = ['Michael Jackson', 'Elvis Presley', 'Freddie Mercury']
console.log("**** Array 1 ****" , femaleSingers)
console.log("**** Array 2 ****", maleSingers)
console.log("");


console.log("************** Example function concat Arrays (a, b) *********************");
const concatBase = <T>(a: T[], b: T[]): T[] => {
    return a && b ? [...a, ...b] : a ? [...a] : b ? [...b] : [];
};
const bestSingers = concatBase<string>(femaleSingers, maleSingers);
console.log('Concat (a, b) -> ', bestSingers)


console.log("");
console.log("************** Example function concat multiple Arrays (a, b, ...) *********************");

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
console.log('Concat Multiple -> ', multipleArrays)