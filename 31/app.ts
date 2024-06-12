// creating a array with 5 values 
let userNames = ["ali","hassan","hussain","hasnain","admin"]

// remove all values from our array now our array is empty
userNames = []


if (userNames.length === 0) {
    console.log(" your array is empty we need to find some users");
    
}else{
    userNames.forEach(oneUser =>{
        if(oneUser === "admin"){
            console.log(`hello ${oneUser}, would you like to see a status report?`);
        }else{
            console.log(`hello ${oneUser}, thank you for logging in again`);
            
        }
    })
}