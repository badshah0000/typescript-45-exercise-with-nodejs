//assignment 3
var personName = "Syed Hasnain";
//in lowercase
console.log("lowercase:", personName.toLowerCase());
//in uppercase
console.log("uppercase:", personName.toUpperCase());
//title case
console.log("titlecase:", personName.replace(/\b\w/g, function (c) { return c.toUpperCase(); }));
var personName2 = "muhammad hasnain";
console.log("tolowercase", personName2.toLowerCase());
console.log("touppercase", personName2.toUpperCase());
console.log("titlecase", personName2.replace(/\b\w/g, function (c) { return c.toUpperCase(); }));
var personName3 = "syed muhammad hasnain shah";
console.log(personName3.toLowerCase());
console.log(personName3.toUpperCase());
console.log(personName3.replace(/\b\w/g, function (c) { return c.toUpperCase(); }));
