// assignment   13
var transportation = ['civic', 'BMW', 'v8', 'vigo', 'dala jis me saman ho'];
for (var i = 0; i < transportation.length; i++) {
    console.log('i would like to own a ' + transportation[i]);
}
var transportation2 = ["vigo", "bugati", "v8"];
transportation2.forEach(function (carName) {
    console.log("i like this car : ".concat(carName));
});
