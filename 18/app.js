// assignment 18
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//  making a array of countries and rint its original order 
var countriesToVisit = ["pakistan", "china", "india", "iran"];
console.log("Original Order:", countriesToVisit);
// print the arrays in alphabetical order without modifying the actual array list
console.log("Alphabetical Order:", __spreadArray([], countriesToVisit, true).sort());
// show that the array in still in its original order
console.log("still in Original Order");
// print the array in reveresd order without modifying the actual array list
console.log("Reverse Order:", __spreadArray([], countriesToVisit, true).reverse());
// show that the array in still in its original order
console.log("still in Original Order");
// we have changed the original array order now
console.log("Original Array Reversed:", countriesToVisit.reverse());
// print the array to show that its back to its original order
console.log("Back To Original Order:", countriesToVisit.reverse());
// print the array to show that its order has been changed in alphabetical order now
console.log("Sorted in Alphabetical Order:", countriesToVisit.sort());
// we have changed again the original array order now in reverse order again 
console.log("Original Array Reversed Again:", countriesToVisit.reverse());
