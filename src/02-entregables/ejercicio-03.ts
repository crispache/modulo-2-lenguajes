console.log("************** DELIVERABLE 03 *********************");
console.log("");

const user_1: Person = { name: 'Manuel', age: 30 };
const user_2: Person = { name: "Maria", surname: "Ibañez", country: "SPA" };
const user_3: Person = { name: "Luisa", age: 31, married: true };
console.log("**** Object 1 ****" , user_1)
console.log("**** Object 2 ****", user_2)
console.log("**** Object 3 ****", user_3)
console.log("");


console.log("************** Example function clone *********************");

interface Person {
    name: string;
    surname?: string;
    age?: number;
    country?: string;
    married?: boolean;
}


// Nota: copia sencilla (a primer nivel) no es una copia profunda.
const clone = <T extends object>(source: T): T => {    
    return {...source};
} 

const objectCopy = clone<Person>(user_1)
console.log('*** Object 1 (Clone) -> ', objectCopy)

const merge = <T extends object>(source: T, target: T): T => {
    const copy_target = clone<T>(target);
    const copy_source = clone<T>(source);
    return {...copy_target, ...copy_source}
} 

const mergeArrays = merge<Person>(user_2, user_3);
console.log('*** Object 2 - Object 3 (Merge) -> ', mergeArrays)