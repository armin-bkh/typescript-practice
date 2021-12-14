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