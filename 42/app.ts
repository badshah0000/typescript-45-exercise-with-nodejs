function show_magicians(magicians:string[]) {
    magicians.forEach(name => console.log(name));
}

// function make magicians great through.map() it will modify array

function make_great(magicians:string[]) {
   return magicians.map(name => `the great ${name}`)
}




// define array of magicians names

let magician_names = ["hussain","hasnain","hussain"]

// call make_great function to modify magicians names
let great_magicians = make_great(magician_names)


// call show_magicians that show modify list of magicians
show_magicians(great_magicians)