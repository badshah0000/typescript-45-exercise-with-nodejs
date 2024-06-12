// assignment  16
// creating a guest list array
var guestlist = ['muhammad', 'ali', 'hassan', 'hussain', 'hasnain'];
// making variable for those guest who cant come
var dontCome = guestlist[0];
// print the name of guest who cant come
console.log(dontCome, "nhi aa sakta");
// add and remove values from guest list array
guestlist.splice(0, 1, "muhammad");
// message print for bigger table
console.log("good news ! we have found a bigger table for dinner");
// adding a new value at starting index of array
guestlist.unshift('shaheen');
// adding a new value at ending index of array
guestlist.push("shaheen1");
// get a middle index of our guest list array
var middleindex = Math.floor(guestlist.length / 2);
// adding a new guest at middle index of array
guestlist.splice(middleindex, 0, "rizwan");
// print message of updated list
console.log("updated list of our guests");
// sending invitation message to our guests one by one with their names
guestlist.forEach(function (oneguest) { return console.log("salam ".concat(oneguest, ", would you like to dinner with me")); });
