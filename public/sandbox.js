"use strict";
//compile
let character = "armin";
console.log(character);
const inputs = document.querySelectorAll("input");
inputs.forEach((input) => {
    console.log(input);
});
//compile
//argoumant and parameters in function
const calc = (num) => {
    return num * num;
};
console.log(calc(5));
//argoumant and parameters in function
//varibales and rule for asigning value to them
let students = ["armin", "matin", "rading"];
// students[0] = 0;
students[0] = "reza";
students.push("mamd");
let numbers = [20, 17, 15, 19];
numbers.push(10);
let mixArray = [0, "mnamda", { name: "armin" }, false];
mixArray.push(5);
mixArray.push("asdsa");
mixArray.push(true);
let person = {
    name: "ali",
    age: 14,
    family: "zandi",
};
person.name = "sadegh";
// person.name = 15;
person.age = 16;
// person.age = "adf"
// person.skill = ["react", "vue"];
person = {
    name: "reza",
    age: 20,
    family: "rahimi",
};
// person = {
//   name: "reza",
//   age: 20,
// }
// person = {
//   name: "reza",
//   age: "asd",
//   family: 12,
// }
// person = {
//   name: "reza",
//   age: 20,
//   family: "rahimi",
//   skills: ['react', 'vue'],
// }
//varibales and rule for asigning value to them
//explicit types
let Name;
Name = "132";
let age;
age = 15;
let isAdmin;
isAdmin = false;
let teachers = [];
teachers.push("Eslami");
let counts = [];
counts.push(1);
//explicit types
//union types
let mixed = [];
mixed.push({ name: "armin" });
mixed.push(15);
mixed.push("rrr");
mixed.push(false);
mixed.push(["armin", "reza", 5]);
console.log(mixed);
let counter;
counter = 5;
counter = "5";
console.log(counter);
//union types
// explicit type in object
//explicit type in object with allow array
let you;
you = [];
//explicit type in object with allow array
//explicit type in object with specifc
let me;
me = {
    name: "armin",
    family: "bakhshi",
    age: 18,
    isAdmin: true,
};
console.log(me);
//explicit type in object with specifc
// explicit type in object
//any type
let admin;
admin = 17;
admin = "armin";
admin = true;
admin = [17, "armin", true];
admin = { name: "armin", age: 17 };
//any in array
let animals = [];
animals.push(5);
animals.push("zabra");
animals.push(true);
animals.push({ name: "zebra", age: 5 });
//any in array
//any in object
let zebra;
zebra = {
    name: "zebra",
    age: 5,
};
zebra = {
    name: 5,
    age: "zebra",
};
console.log(zebra);
//any in object
//any type
console.log("tsconfig.json");
//function and function type
let plus = () => { };
// plus = "string";
let fun;
// fun = "sfdsf";
//number type
//optional parameter
const calculate = (a, b, c) => {
    console.log(c);
    return a + b;
};
//optional parameter
let result = calculate(10, 5, "hello");
//number type
// result = "rsd";
result = 14;
//void type
//default parameter
const minus = (a, b, c = "number is not exist") => {
    console.log(c);
    console.log(a - b);
};
//default parameter
minus(10, 6, "found");
const getPerson = (person) => {
    if (person.isAdmin) {
        console.log(person);
        return;
    }
    console.log(Object.assign(Object.assign({}, person), { isAdmin: false }));
};
getPerson({ name: "armin", age: 15 });
getPerson({ name: "armin", age: 15, isAdmin: true });
let getUser;
getUser = ({ name, family, isAdmin }) => {
    console.log(`${name} ${family} is logged in. ${isAdmin ? "he is admin" : "he is not admin"}`);
};
getUser = (user) => {
    console.log(`${user.name} ${user.family} is logged in. ${user.isAdmin ? "he is admin" : "he is not admin"}`);
};
getUser({ name: "armin", family: "bakhshi", isAdmin: true });
let calculator;
calculator = (numOne, numTwo, action) => {
    console.log(action);
    if (action === "add")
        return numOne + numTwo;
    else
        return numOne - numTwo;
};
calculator = (numOne, numTwo, action = "add") => {
    console.log(action);
    if (action === "add")
        return numOne + numTwo;
    else
        return numOne - numTwo;
};
calculator(15, 5);
//function signature
//function and function type
