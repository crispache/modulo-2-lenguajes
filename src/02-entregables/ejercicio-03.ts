console.log("************** DELIVERABLE 03 *********************");
console.log("");

console.log("************** Example function clone *********************");


interface Person {
    name: string;
    surname?: string;
    age?: number;
    country?: string;
    married?: boolean;
}


//* Nota: copia sencilla(a primer nivel) no es una copia profunda.
const clone = <T extends object>(source: T): T => {    
    return {...source};
} 

const merge = <T extends object>(source: T, target: T) => {    // TIP: Puedes usar la función "clone" del apartado A.
    const copy_target = clone<T>(target);
    const copy_source = clone<T>(source);
    return {...copy_target, ...copy_source}
} 


const user_1: Person = { name: 'Manuel', age: 30 };
const user_2: Person = { name: "Maria", surname: "Ibañez", country: "SPA" };
const user_3: Person = { name: "Luisa", age: 31, married: true };

const objectCopy = clone<Person>(user_1)
console.log('clone -> ', objectCopy)

/*-----------------------------------------------------------------*/

const mergeArrays = merge<Person>(user_2, user_3);
console.log('Merge -> ', mergeArrays)