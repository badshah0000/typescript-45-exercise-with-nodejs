// array of current users
let current_users = ["Hasnain","Hamza","Ubaid","Ali","Babar"]

// array of new users
let new_users = ["Zainab","Ayesha","Maryam","Ali","Hasnain"]

// loop through new_users to check for usernames avaibility
new_users.forEach(new_one_user=>{
    // making a condition for username already exists and save in our_conditions variables
    let our_condition = current_users.some(current_one_user => current_one_user.toLowerCase() === new_one_user.toLowerCase())
    // print different messages using if else statements
    if (our_condition) {
        console.log(`sorry ${new_one_user} is already taken!`);
        
    }else{
        console.log(`this username ${new_one_user} is available`);
        
    }

})