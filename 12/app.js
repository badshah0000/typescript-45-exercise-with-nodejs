// assignment   12
var members = ['muhammad', 'ali', 'hassan', 'hussain', 'hasnain'];
var message = 'i love my names:';
for (var i = 0; i < members.length; i++) {
    console.log(message + members[i]);
}
var members2 = ["ali", "hassan", "hussain"];
members2.forEach(function (name3) {
    console.log("hello ".concat(name3, ", how are you"));
});
