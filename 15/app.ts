

// assignment  15

let guestList = ["muhammad","ali","hassan","hussain","hasnain"];

let dontCome = guestList[0];

console.log(dontCome, "nhi aa sakta");

guestList.splice(0, 1, "ubaid");

guestList.forEach(guest => console.log(`salam ${guest}, would you like to dinner with me?`));

let guestList2 = ["muhammad","ali","hassan","hussain","hasnain"];

let dontCome2 = guestList2[0]
console.log(dontCome2,"nhi aa sakta");

guestList2.splice(0, 1, "mehtab");

guestList2.forEach(khan => console.log(`salam ${khan} you invitd dinner`))