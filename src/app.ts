//module
import Invoice from "./classes/invoice.js";
//module

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

//module
const invOne = new Invoice("armin", "is a front-end developer", 50);
const invTwo = new Invoice("Reza", "is a back-end developer", 55);

console.log(invOne.format());

invOne.amount = 20;

console.log(invOne);

let invArr: Invoice[] = [];

invArr.push(invOne);
invArr.push(invTwo);

console.log(invArr);

invArr.forEach((inv) => {
  console.log(inv.client, inv.amount, inv.format());
});
//module

// classes


//inteface

interface user {
    name: string;
    family: string;
    isAdmin: boolean;
    password: string;
    email: string;
    buyed(name: string, count: number): number;
    noop: (name: string) => void;
}

//interface object

let me: user = {
    name: "armin",
    family: "bakhshi",
    isAdmin: true,
    password: "1365a1365b",
    email: "arminbkh0921@yahoo.com",
    buyed(name: string, count: number): number{
        console.log(`${name} buyed a ticket by ${count}$`)
        return count;
    },
    noop: (name: string): void => {
        console.log(`${name} didn't buy nothing`)
    }
};

const checkUser = (me: user) => {
    console.log(`hello ${me.family}`)
    me.buyed(me.name, 2000);
}

checkUser(me);
//interface object


//inteface

