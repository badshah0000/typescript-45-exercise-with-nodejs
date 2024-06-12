// array of current users
var current_users = ["Hasnain", "Hamza", "Ubaid", "Ali", "Babar"];
// array of new users
var new_users = ["Zainab", "Ayesha", "Maryam", "Ali", "Hasnain"];
// loop through new_users to check for usernames avaibility
new_users.forEach(function (new_one_user) {
    // making a condition for username already exists and save in our_conditions variables
    var our_condition = current_users.some(function (current_one_user) { return current_one_user.toLowerCase() === new_one_user.toLowerCase(); });
    // print different messages using if else statements
    if (our_condition) {
        console.log("sorry ".concat(new_one_user, " is already taken!"));
    }
    else {
        console.log("this username ".concat(new_one_user, " is available"));
    }
});
