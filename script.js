
/* Task 1: Arrow Functions
1. Create an array of numbers and use the `map` function with an arrow function to square each
element in the array.
2. Write a function that takes an array of strings and uses the `filter` function with an arrow
function to return only strings with more than 5 characters. */

function squareElements(str) {
    let newArr = str.split(',');
    return newArr.map(element => element ** 2).join(', ');
}

let numArr = document.getElementById('numArr');
numArr.addEventListener('input', event => {
    document.getElementById("newNumArr").innerHTML = squareElements(numArr.value);
})

function filterElements(str) {
    let newArr = str.split(',');
    return newArr.filter(element => element.length > 5).join(', ');
}

let strArr = document.getElementById('strArr');
strArr.addEventListener('input', event => {
    document.getElementById("newStrArr").innerHTML = filterElements(strArr.value);
})

/* Task 2: Destructuring
3. Given the object `person` with properties `name` and `age`, use destructuring to extract these
properties into individual variables.
4. Create a function that takes an object as a parameter and uses destructuring to extract and
log specific properties. */

const person = {
    name: 'Jane',
    age: 25
}

const { name, age } = person;
console.log(name);
console.log(age);
document.getElementById("personName").innerHTML = name;
document.getElementById("personAge").innerHTML = age;


function logParams({ name, age }) {
    console.log(`${name} is ${age} years old.`);
    return `${name} is ${age} years old.`;
}

document.getElementById("logParams").innerHTML = logParams(person);

/* Task 3: Template Literals
5. Write a function that takes a person's name and age and uses template literals to create a
sentence that introduces the person.
6. Create an array of objects with information about books (title, author, year). Write a function
that uses template literals to log information about each book in the array. */

const person2 = {
    name: 'Lara',
    age: 19
}

function templateLiterals({ name, age }) {
    return `My name is ${name}. I'm a ${age} years old.`
}

document.getElementById("templateLiterals").innerHTML = templateLiterals(person2);


const books = [{
    title: "Book1",
    author: "Author1",
    year: 2013
},
{
    title: "Book2",
    author: "Author2",
    year: 2015
},
{
    title: "Book3",
    author: "Author3",
    year: 2019
}]


function bookInfo(books) {
    for (let { title, author, year } of books) {
        console.log(`The ${title} was written by ${author} in ${year}`);
    }
}

function createBookList(books) {
    let bookList = document.getElementById('bookList');
    for (let { title, author, year } of books) {
        let li = document.createElement('li');
        li.innerText = `The ${title} was written by ${author} in ${year}`;
        bookList.appendChild(li);
    }
}

bookInfo(books);
createBookList(books);


/* Task 4: Spread and Rest Operators
7. Use the spread operator to concatenate two arrays into a new array.
8. Write a function that takes multiple arguments and uses the rest operator to collect them into
an array. */

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 8, 9];
const newArr = [...arr1, ...arr2];
console.log(newArr);

function multiArgs(...args) {
    let argsArr = [...args];
    return argsArr;
}

console.log(multiArgs(3, 6, 8, 2, 1, 0))

/* Task 5: Classes and Inheritance
9. Create a class `Animal` with properties `name` and `sound`. Extend this class to create a
subclass `Bird` with an additional property `canFly`.*/

class Animal {
    constructor(name, sound) {
        this.name = name;
        this.sound = sound;
    }
}

class Bird extends Animal {
    constructor(name, sound, canFly) {
        super(name, sound);
        this.canFly = canFly;
    }

}

console.log(new Bird('Kva', 'kva', true));

/*10. Write a function that takes an array of objects representing shapes (circle, square) and uses
classes and inheritance to calculate and log the area of each shape. */

class Shape {
    constructor(width){
        this.width = width;
    }

    calculateArea(){

    }
}

class Square extends Shape {
    constructor(width){
        super();
        this.width = width;
    }

    calculateArea(){
        return this.width **= 2; 
    }
}

class Circle extends Shape {
    constructor(width){
        super();
        this.radius = width;
    }

    calculateArea(){
        return Math.PI * this.radius ** 2; 
    }
}

console.log('Square', new Square(2).calculateArea());
console.log('Circle', new Circle(2).calculateArea());

let arrOfObj = [new Circle(3), new Square(3)];

function calculateShapeArea(arrOfObj){
    for(let obj of arrOfObj){
        console.log(`Area of ${obj.constructor.name} is ${obj.calculateArea()}`)
    }
}

calculateShapeArea(arrOfObj);

/* Task 6: Promises
11. Create a promise that resolves after a delay of 3 seconds and logs a success message.*/

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("succeeded!"), 3000);

});
myPromise.then(result => console.log(result));

/*12. Write a function that uses promises to fetch data from an API and log the result. */

const apiUrl = 'https://hp-api.onrender.com/api/character/9e3f7ce4-b9a7-4244-b709-dae5c1f1d4a8'

function apiData() {

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log("Harry Potter's Data:", data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

apiData();

/* Task 7: Async/Await
13. Refactor the promise example from task 11 to use async/await.*/

async function fetchAsyncData() {

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
    } catch (e) {
        console.error(`Could not get data: ${error}`);
    }

}

fetchAsyncData();

/*14. Create an async function that fetches data from two different APIs and returns the combined
result. */

const apiUrl1 = 'https://hp-api.onrender.com/api/character/c3b1f9a5-b87b-48bf-b00d-95b093ea6390';
const apiUrl2 = 'https://hp-api.onrender.com/api/character/3db6dc51-b461-4fa4-a6e4-b1ff352221c5';

async function fetchFromTwoApis() {

    try {
        const results = await Promise.all([
            fetch(apiUrl1),
            fetch(apiUrl2)
        ]);
        console.log(results);
        if (!results[0].ok && !results[1].ok) {
            throw new Error(`HTTP error: ${results.status}`);
        }
        const data = results.map(res => res.json());
        console.log(data);
        console.log('Student 1 ', await data[0]);
        console.log('Student 2 ', await data[1]);



    } catch (e) {
        console.error(`Could not get data: ${e}`);
    }
}

fetchFromTwoApis();


/* Task 8: Modules
15. Create a module that exports a function to calculate the area of a rectangle.
16. Import and use the module function in another file to calculate the area of a rectangle. */

/* I've made this task in separate files: rectangle.js, script-square.js, rectangle.html */
