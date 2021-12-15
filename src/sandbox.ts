//compile
let character: string = "armin";

console.log(character);

const inputs = document.querySelectorAll("input");

inputs.forEach((input) => {
  console.log(input);
});

//compile

//argoumant and parameters in function
const calc = (num: number) => {
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

let Name: string;
Name = "132";

let age: number;
age = 15;

let isAdmin: boolean;
isAdmin = false;

let teachers: string[] = [];
teachers.push("Eslami");
let counts: number[] = [];
counts.push(1);
//explicit types

//union types

let mixed: (string | number | { name: string } | boolean | object)[] = [];
mixed.push({ name: "armin" });
mixed.push(15);
mixed.push("rrr");
mixed.push(false);
mixed.push(["armin", "reza", 5]);
console.log(mixed);

let counter: number | string;
counter = 5;
counter = "5";
console.log(counter);

//union types

// explicit type in object

//explicit type in object with allow array

let you: object;
you = [];

//explicit type in object with allow array

//explicit type in object with specifc

let me: {
  name: string;
  family: string;
  age: number;
  isAdmin: boolean;
};

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

let admin: any;

admin = 17;
admin = "armin";
admin = true;
admin = [17, "armin", true];
admin = { name: "armin", age: 17 };

//any in array

let animals: any[] = [];

animals.push(5);
animals.push("zabra");
animals.push(true);
animals.push({ name: "zebra", age: 5 });

//any in array

//any in object

let zebra: {
  name: any;
  age: any;
};

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

let plus = () => {};

// plus = "string";

let fun: Function;
// fun = "sfdsf";

//number type

//optional parameter
const calculate = (a: number, b: number, c?: number | string): number => {
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
const minus = (
  a: number,
  b: number,
  c: number | string = "number is not exist"
): void => {
  console.log(c);
  console.log(a - b);
};
//default parameter

minus(10, 6, "found");
//void type

//type aliases
type stringAndNum = string | number;

type objPerson = { name: string; age: number | string; isAdmin?: boolean };

type stuArray = (string | number)[];

const getPerson = (person: objPerson): void => {
  if (person.isAdmin) {
    console.log(person);
    return;
  }
  console.log({ ...person, isAdmin: false });
};
getPerson({ name: "armin", age: 15 });
getPerson({ name: "armin", age: 15, isAdmin: true });
//type aliases


//function signature
type person = { name: string; family: string; isAdmin?: boolean };

let getUser: (obj: person) => void;

getUser = ({ name, family, isAdmin }: person): void => {
  console.log(
    `${name} ${family} is logged in. ${
      isAdmin ? "he is admin" : "he is not admin"
    }`
  );
};

getUser = (user: person): void => {
  console.log(
    `${user.name} ${user.family} is logged in. ${
      user.isAdmin ? "he is admin" : "he is not admin"
    }`
  );
};

getUser({ name: "armin", family: "bakhshi", isAdmin: true });

let calculator: (a: number, b: number, action?: string) => number;

calculator = (
  numOne: number,
  numTwo: number,
  action?: string
): number => {
  console.log(action);
  if (action === "add")
    return numOne + numTwo;
    else return numOne - numTwo;
};

calculator = (
  numOne: number,
  numTwo: number,
  action: string = "add"
  ): number => {
  console.log(action);
  if (action === "add")
    return numOne + numTwo;
    else return numOne - numTwo;
};

calculator(15, 5);
//function signature


//function and function type
