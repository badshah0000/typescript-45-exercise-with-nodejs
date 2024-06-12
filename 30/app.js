var userNames = ["ali", "hassan", "hussain", "hasnan", "admin"];
// using for each loop for array
userNames.forEach(function (oneUser) {
    if (oneUser === "admin") {
        console.log("hello ".concat(oneUser, ", would you like to see a status report?"));
    }
    else {
        console.log("hello ".concat(oneUser, ", thank you for logging again. "));
    }
});
