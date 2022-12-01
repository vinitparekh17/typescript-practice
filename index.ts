// basic object creation

interface User {
    name: string;
    age: number;
    hobbies: string[];
}

let myuser: User = {
    name: 'Vinit',
    age: 20,
    hobbies: ['Sports', 'Gaming']
}

console.log(myuser.hobbies[0]);
console.log(myuser);

// function with optional parameters and predefined types

function test(name: string, age: number, date: Date) {
    console.log(`${name} is ${age} years old, today is ${date.toDateString()}`);
}

test('Vinit', 19, new Date());

function powerfun(base: number, exponential: number): number {
    return base^exponential;
}

console.log(powerfun(3,2))

// obj types

function obj(myobj: { a: number; b: number }) {
    console.log(`Object has 2 values a and b as follow as ${myobj.a} , ${myobj.b}`);
}

obj({a: 21, b: 43})