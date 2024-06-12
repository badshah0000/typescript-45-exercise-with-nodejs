// define a function with a rest parameter that accept item arguments representing our sandwich
function makeSandwich() {
    var item = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        item[_i] = arguments[_i];
    }
    console.log("\n making a sandwich with the following items: \n");
    item.forEach(function (singleItem) { return console.log("-" + singleItem); });
    console.log("\n now enjoy sandwich");
}
// call the function e items with three different number of arguments
makeSandwich("chicken", "cheese", "mayo", "butter");
makeSandwich("bread", "butter");
makeSandwich("butter", "bread", "chicken", "cheese", "mayo", "butter", "tomato");
