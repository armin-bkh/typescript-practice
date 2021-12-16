//DOM in typescript

// const anchor = document.querySelector('a');
// if(anchor) console.log(anchor.href);
// console.log(anchor?.href);

// const anchor = document.querySelector('a')!;
const anchor = document.querySelector("a") as HTMLAnchorElement;
console.log(anchor.href);

//form
const form = document.querySelector(".new-item-form") as HTMLFormElement;
//form

console.log(form.children);

//inputs
const type = document.querySelector("#type") as HTMLSelectElement;
const toform = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;
//inputs

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  console.log(type.value, toform.value, details.value, amount.valueAsNumber);
});

//DOM in typescript

// classes

class Invoice {
   client: string;
   details: string;
   amount: number;
   constructor(c: string, d: string, a: number){
    this.client = c;
    this.details = d;
    this.amount = a;
   }
   
   format(){
       return `${this.client} ${this.details} ${this.amount}`
   }

}

// classes


const invOne = new Invoice("armin", "is a front-end developer", 50);

console.log(invOne.format());

invOne.amount = 20;

console.log(invOne)