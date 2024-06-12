// assignment  14
var guest_list = ['muhammad', 'ali', 'hassan', 'hussain', 'hasnain'];
for (var i = 0; i < guest_list.length; i++) {
    console.log('Respected Sir/Madam:' + guest_list[i] + ',\nWe invited youon dinner tomorrow.\n\nthank you');
}
var guestlist = ['muhammad', 'ali', 'hassan', 'hussain', 'hasnain'];
guestlist.forEach(function (oneguest) { return console.log("salam ".concat(oneguest, ", would you like to dinner with me")); });
var guest_list2 = ['muhammad', 'ali', 'hassan', 'hussain', 'hasnain'];
guest_list2.forEach(function (savearray) {
    console.log("Respected Sir/Madam: ".concat(savearray, " ,\nWe invited youon dinner tomorrow.\n\nthank you\n"));
});
