
// assignment   13


let transportation : string [] = ['civic','BMW','v8','vigo','dala jis me saman ho'];
for(let i=0; i<transportation.length; i++){
    console.log('i would like to own a ' + transportation[i]);
}

let transportation2:string [] = ["vigo","bugati","v8"];
transportation2.forEach(carName => {
    console.log(`i like this car : ${carName}`)
})