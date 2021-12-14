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
