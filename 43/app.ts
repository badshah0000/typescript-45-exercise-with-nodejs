function show_magicians(magicians:string[]) {
    magicians.forEach(name => console.log(name));
}

// function make magicians great through.map() it will modify array

function make_great(magicians:string[]) {
   return magicians.map(name => `the great ${name}`)
}




// define array of magicians names

let magician_names = ["hussain","hasnain","hussain"]

// making a copy of original array through .slice() function

let copy_magician_names = magician_names.slice()

// modified the copied array to include "the great" with thier names

let copy_great_magicians = make_great(copy_magician_names)

// show both array original and copied

// original
console.log("original array \n");


show_magicians(magician_names)

// copied
console.log("\ncopied array\n");

show_magicians(copy_great_magicians)