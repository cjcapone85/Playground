let age: number;

age = 12;

let username: string;

username = 'Chad';

let isInstructor: boolean;

isInstructor = false;

//More complex types

let hobbies: string[];

hobbies = ['sports', 'hunting', 'cooking'];

type Person = {
    name: string;
    age: number;
}

let person: Person;

person = {
    name: 'Chad',
    age: 37
};

// person = {
//     isEmployee: true
// };

let people: Person[];

let course: string | number = 'React- The Complete Guide';

course = 12341;

// Functions & types

function add(a: number , b: number) {
    return a + b;
}

function print(value: any) {
    console.log(value);
}


// Genreics

function insertAtBeginning<T>(array: T[], value: T) {
    const newArray = [value, ...array];
    return newArray;
}

const demoArray = [1,2,3];

const updatedArray = insertAtBeginning(demoArray, -1); //[-1,1,2,3]

//updatedArray[0].split('');