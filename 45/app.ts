// define a function to create a car object with ptional options

function create_car(manufecturer,model,...options) {
    // initialize a car object with manufecture and model
    let car = {
        manufecturer:manufecturer,
        model:model
    };

    //add aditional options to the car object
    options.forEach(option =>{
        let [key , value] = option.split(":");
        car [key.trim()] = value.trim();
    });
    return car;
}

// call the function to create a car object

let my_car = create_car("toyota","corolla","color:black","sunroof:true","year:2024");

// print the variables to ensure all the information is stored correctly in the car object

console.log(my_car);















