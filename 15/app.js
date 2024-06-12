// assignment  15
var guestList = ["muhammad", "ali", "hassan", "hussain", "hasnain"];
var dontCome = guestList[0];
console.log(dontCome, "nhi aa sakta");
guestList.splice(0, 1, "ubaid");
guestList.forEach(function (guest) { return console.log("salam ".concat(guest, ", would you like to dinner with me?")); });
var guestList2 = ["muhammad", "ali", "hassan", "hussain", "hasnain"];
var dontCome2 = guestList2[0];
console.log(dontCome2, "nhi aa sakta");
guestList2.splice(0, 1, "mehtab");
guestList2.forEach(function (khan) { return console.log("salam ".concat(khan, " you invitd dinner")); });
