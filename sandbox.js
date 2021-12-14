var character = "armin";
console.log(character);
var inputs = document.querySelectorAll('input');
inputs.forEach(function (input) {
    console.log(input);
});
var calc = function (num) {
    return num * num;
};
console.log(calc(5));
var students = ["armin", "matin", "rading"];
// students[0] = 0;
students[0] = "reza";
students.push("mamd");
var numbers = [20, 17, 15, 19];
numbers.push(10);
var mixArray = [0, "mnamda", { name: "armin" }, false];
mixArray.push(5);
mixArray.push("asdsa");
mixArray.push(true);
var person = {
    name: "ali",
    age: 14,
    family: "zandi"
};
person.name = "sadegh";
// person.name = 15;
person.age = 16;
// person.age = "adf" 
// person.skill = ["react", "vue"];
person = {
    name: "reza",
    age: 20,
    family: "rahimi"
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
//explicit types
var Name;
Name = "132";
var age;
age = 15;
var isAdmin;
isAdmin = false;
var teachers = [];
teachers.push("Eslami");
var counts = [];
counts.push(1);
//explicit types
//union types
var mixed = [];
mixed.push({ name: "armin" });
mixed.push(15);
mixed.push("rrr");
mixed.push(false);
mixed.push(["armin", "reza", 5]);
console.log(mixed);
var counter;
counter = 5;
counter = "5";
console.log(counter);
//union types
// explicit type in object
//explicit type in object with allow array
var you;
you = [];
//explicit type in object with allow array
//explicit type in object with specifc
var me;
me = {
    name: "armin",
    family: "bakhshi",
    age: 18,
    isAdmin: true
};
console.log(me);
//explicit type in object with specifc
// explicit type in object
