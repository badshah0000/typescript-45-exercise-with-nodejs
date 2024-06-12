"use strict";
// define variables
let apple = "apple";
let uppercaseApple = "APPLE";
let ten = 10;
let twenty = 20;
let fruits = ["apple", "banana", "orange"];
// test for equality and inequality with strings
console.log("is apple is equal to apple");
console.log(apple == "apple");
console.log("is apple is not equal to apple");
console.log(apple != "apple");
// test using lower case
console.log("\nis APPLE is equal to apple after converting to lowercase?");
console.log(uppercaseApple.toLowerCase() == "apple");
console.log("\nis APPLE is equal to apple after converting to lowercase?");
console.log(uppercaseApple.toLowerCase() != "apple");
// numericals tests
// equal to
console.log("\nis ten is equal to twenty");
console.log(ten == twenty);
// not equal to
console.log("\nis ten is not equal to twenty");
console.log(ten != twenty);
// greater than zero tests
console.log("\nis ten is greater than zero");
console.log(ten > 0);
// less than
console.log("\nis twenty is less than 10");
console.log(twenty < 10);
// greater than or equal to
console.log("\nis ten is greater than or equal to 5?");
console.log(ten >= 5);
// less than or equal to
console.log("\nis twenty is less than or equal to 10?");
console.log(twenty >= 10);
// test using "and" & "or" operators
// using && (and)
console.log("\n twenty is not equal to 10 and twenty is greater than 10");
console.log(twenty != 10 && twenty > 10);
console.log("\n twenty is not equal to 10 and twenty is greater than 10");
console.log(twenty != 10 && twenty > 30);
// using (or)
console.log("\n 20 is greater than 50 OR 20 is equal to 20");
console.log(20 > 50 || 20 == 20);
console.log("\n 20 is greater than 50 OR 20 is not equal to 20");
console.log(20 > 50 || 20 != 20);
// test wather an item is include in array
console.log("\nis orange include in my fruits array");
console.log(fruits.includes("orange"));
// not include
console.log("\nis orange not include in my fruits array");
console.log(!fruits.includes("orange"));
