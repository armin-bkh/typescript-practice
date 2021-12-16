"use strict";
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
const toform = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
//inputs
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(type.value, toform.value, details.value, amount.valueAsNumber);
});
//DOM in typescript
// classes
class Invoice {
    constructor(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    format() {
        return `${this.client} ${this.details} ${this.amount}`;
    }
}
// classes
const invOne = new Invoice("armin", "is a front-end developer", 50);
console.log(invOne.format());
invOne.amount = 20;
console.log(invOne);
