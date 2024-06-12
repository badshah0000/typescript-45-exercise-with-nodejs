function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
// function make magicians great through.map() it will modify array
function make_great(magicians) {
    return magicians.map(function (name) { return "the great ".concat(name); });
}
// define array of magicians names
var magician_names = ["hussain", "hasnain", "hussain"];
// call make_great function to modify magicians names
var great_magicians = make_great(magician_names);
// call show_magicians that show modify list of magicians
show_magicians(great_magicians);
