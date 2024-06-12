function make_album(artist_name:string,album_title:string,tracks?:number) {
    let album:{artist:string , title:string, tracks?:number}={
        artist:artist_name,
        title:album_title,
    };
    if (tracks !== undefined){
        album.tracks = tracks
    }
    return album;
    
}


// calling three functions with different values

let album1 = make_album("hasnain","album title 1");

let album2 = make_album("zaid","album title 2");


// calling a make_album function with 3rd parameter

let album3 = make_album("ali","album title 3",10)
// print values of our objects created function

console.log(album1);
console.log(album2);
console.log(album3);


