import Payment from "./classes/payment.js";
import Invoice from "./classes/invoice.js";
import ListTemplate from "./classes/listTemplate.js";
//module
//DOM in typescript
// const anchor = document.querySelector('a');
// if(anchor) console.log(anchor.href);
// console.log(anchor?.href);
// const anchor = document.querySelector('a')!;
// const anchor = document.querySelector("a") as HTMLAnchorElement;
// console.log(anchor.href);
//form
const form = document.querySelector(".new-item-form");
//form
// console.log(form.children);
//inputs
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
const list = document.querySelector('ul');
const listTemplate = new ListTemplate(list);
//inputs
//interface in classes
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let values = [tofrom.value, details.value, amount.valueAsNumber];
    let doc;
    if (type.value === "payment") {
        doc = new Payment(...values);
    }
    else {
        doc = new Invoice(...values);
    }
    let listValues = [doc, type.value, "end"];
    listTemplate.render(...listValues);
});
//interface in classes
//DOM in typescript
// classes
//module
// const invOne = new Invoice("armin", "is a front-end developer", 50);
// const invTwo = new Invoice("Reza", "is a back-end developer", 55);
// console.log(invOne.format());
// invOne.amount = 20;
// console.log(invOne);
// let invArr: Invoice[] = [];
// invArr.push(invOne);
// invArr.push(invTwo);
// console.log(invArr);
// invArr.forEach((inv) => {
//   console.log(inv.client, inv.amount, inv.format());
// });
//module
// classes
//inteface
// interface user {
//     name: string;
//     family: string;
//     isAdmin: boolean;
//     password: string;
//     email: string;
//     buyed(name: string, count: number): number;
//     noop: (name: string) => void;
// }
//interface object
// let me: user = {
//     name: "armin",
//     family: "bakhshi",
//     isAdmin: true,
//     password: "1365a1365b",
//     email: "arminbkh0921@yahoo.com",
//     buyed(name: string, count: number): number{
//         console.log(`${name} buyed a ticket by ${count}$`)
//         return count;
//     },
//     noop: (name: string): void => {
//         console.log(`${name} didn't buy nothing`)
//     }
// };
// const checkUser = (me: user) => {
//     console.log(`hello ${me.family}`)
//     me.buyed(me.name, 2000);
// }
// checkUser(me);
//interface object
//interface in classes
// let docOne: hasFormatter;
// let docTwo: hasFormatter;
// docOne = new Invoice("Armin", "for running", 500);
// docTwo = new Payment("Reza", "for driving", 1500);
// let docs: hasFormatter[] = [];
// docs.push(docOne);
// docs.push(docTwo);
// console.log(docs);
//interface in classes
//inteface
// console.log("hello mac")
//generics
//generic in function
// const loginUser = <T extends object>(obj: T) => {
//   const uid = Math.floor(Math.random() * 101);
//   return { ...obj, uid }
// };
// const loginUser = <T extends {name: string}>(obj: T) => {
//   const uid = Math.floor(Math.random() * 101);
//   return { ...obj, uid }
// };
// const user = loginUser({ name: "armin", age: 18, isAdmin: false })
// console.log(user.uid);
//generic in function
// generic in interface
//enum type
// enum genderType { MALE, FEMALE };
// interface person<T> {
//   name: string; 
//   age: number;
//   gender: genderType;
//   favorite: T;
// }
// const userOne: person<string|string[]|null> = {
//   name: "amrin",
//   age: 17,
//   gender: genderType.MALE,
//   favorite: ["programming", "design", "football"],
// }
// const userTwo: person<string|string[]|null> = {
//   name: "sahar",
//   age: 15,
//   gender: genderType.FEMALE,
//   favorite: "music"
// }
// console.log(userOne, userTwo);
//enum type
// generic in interface
//generics
//tuple types
// let arr: [string, string, number] = ["ar", "ba", 2];
// console.log(...arr);
//tuple types
