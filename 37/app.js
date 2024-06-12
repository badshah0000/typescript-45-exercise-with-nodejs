// making a function
function make_shirt(size, printMessage) {
    if (size === void 0) { size = "large"; }
    if (printMessage === void 0) { printMessage = "i love typescript"; }
    console.log("creating a ".concat(size, " shirt with the ").concat(printMessage, " print on shirt"));
}
// calling a function with by default values
make_shirt();
// calling a function now with medium size and default message
make_shirt("medium");
// calling a function now with small size and different print message
make_shirt("small", "i love javascript");
