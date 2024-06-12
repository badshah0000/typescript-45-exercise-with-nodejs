function make_album(artist_name, album_title, tracks) {
    var album = {
        artist: artist_name,
        title: album_title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
// calling three functions with different values
var album1 = make_album("hasnain", "album title 1");
var album2 = make_album("zaid", "album title 2");
// calling a make_album function with 3rd parameter
var album3 = make_album("ali", "album title 3", 10);
// print values of our objects created function
console.log(album1);
console.log(album2);
console.log(album3);
