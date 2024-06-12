// define a function with a rest parameter that accept item arguments representing our sandwich

function makeSandwich(...item:string[]) {
    console.log("\n making a sandwich with the following items: \n");

    item.forEach(singleItem => console.log("-" + singleItem))

    console.log("\n now enjoy sandwich");

}

// call the function e items with three different number of arguments

makeSandwich("chicken","cheese","mayo","butter");

makeSandwich("bread","butter");

makeSandwich("butter","bread","chicken","cheese","mayo","butter","tomato");