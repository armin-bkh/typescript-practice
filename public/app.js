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
