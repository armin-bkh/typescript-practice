let character : string = "armin";

console.log(character);

const inputs = document.querySelectorAll('input');

inputs.forEach(input => {
  console.log(input);
});

const calc = (num : number) =>{
  return num * num;
}
console.log(calc(5));

let students = ["armin", "matin", "rading"];
// students[0] = 0;
students[0] = "reza";
students.push("mamd");

let numbers = [20 ,17, 15, 19];
numbers.push(10);

let mixArray = [0, "mnamda", { name: "armin" }, false];

mixArray.push(5);
mixArray.push("asdsa");
mixArray.push(true);

let person = {
  name: "ali",
  age: 14,
  family: "zandi",
}

person.name = "sadegh";
// person.name = 15;
person.age = 16;
// person.age = "adf" 
// person.skill = ["react", "vue"];

person = {
  name: "reza",
  age: 20,
  family: "rahimi"
}

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