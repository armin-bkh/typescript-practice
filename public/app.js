import Payment from "./classes/payment.js";
import Invoice from "./classes/invoice.js";
//module
//DOM in typescript
// const anchor = document.querySelector('a');
// if(anchor) console.log(anchor.href);
// console.log(anchor?.href);
// const anchor = document.querySelector('a')!;
const anchor = document.querySelector("a");
console.log(anchor.href);
//form
const form = document.querySelector(".new-item-form");
//form
console.log(form.children);
//inputs
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
//inputs
//interface in classes
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let doc;
    if (type.value === "payment") {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    console.log(doc.format());
});
//interface in classes
//DOM in typescript
// classes
//module
const invOne = new Invoice("armin", "is a front-end developer", 50);
const invTwo = new Invoice("Reza", "is a back-end developer", 55);
console.log(invOne.format());
invOne.amount = 20;
console.log(invOne);
let invArr = [];
invArr.push(invOne);
invArr.push(invTwo);
console.log(invArr);
invArr.forEach((inv) => {
    console.log(inv.client, inv.amount, inv.format());
});
//interface object
let me = {
    name: "armin",
    family: "bakhshi",
    isAdmin: true,
    password: "1365a1365b",
    email: "arminbkh0921@yahoo.com",
    buyed(name, count) {
        console.log(`${name} buyed a ticket by ${count}$`);
        return count;
    },
    noop: (name) => {
        console.log(`${name} didn't buy nothing`);
    }
};
const checkUser = (me) => {
    console.log(`hello ${me.family}`);
    me.buyed(me.name, 2000);
};
checkUser(me);
//interface object
//interface in classes
let docOne;
let docTwo;
docOne = new Invoice("Armin", "for running", 500);
docTwo = new Payment("Reza", "for driving", 1500);
let docs = [];
docs.push(docOne);
docs.push(docTwo);
console.log(docs);
//interface in classes
//inteface
