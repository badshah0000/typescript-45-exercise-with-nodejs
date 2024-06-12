
// assignment  14




let guest_list : string [] = ['muhammad','ali','hassan','hussain','hasnain']
for(let i=0; i<guest_list.length; i++){
    console.log('Respected Sir/Madam:' + guest_list[i] + ',\nWe invited youon dinner tomorrow.\n\nthank you')
}


let guestlist = ['muhammad','ali','hassan','hussain','hasnain'];

guestlist.forEach(oneguest => console.log(`salam ${oneguest}, would you like to dinner with me`))


let guest_list2:string[] = ['muhammad','ali','hassan','hussain','hasnain'];
guest_list2.forEach(savearray => {
    console.log(`Respected Sir/Madam: ${savearray} ,\nWe invited youon dinner tomorrow.\n\nthank you\n`)
})