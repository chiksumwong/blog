export interface Person {
    readonly id: number;
    name: string;
    age: number;
}

const tom: Person = {
    id: 1,
    name: 'Tom',
    age: 25,
};

console.log(tom);
