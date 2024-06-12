
//assignment 3


let personName: string = "Syed Hasnain";

//in lowercase
console.log("lowercase:", personName.toLowerCase());

//in uppercase
console.log("uppercase:", personName.toUpperCase());

//title case
console.log("titlecase:", personName.replace(/\b\w/g,c=> c. toUpperCase()));


let personName2:string = "muhammad hasnain";

console.log("tolowercase", personName2.toLowerCase());
console.log("touppercase", personName2.toUpperCase());
console.log("titlecase", personName2.replace(/\b\w/g , c=> c.toUpperCase()));


let personName3:string = "syed muhammad hasnain shah";

console.log(personName3.toLowerCase());
console.log(personName3.toUpperCase());
console.log(personName3.replace(/\b\w/g , c=> c.toUpperCase()));