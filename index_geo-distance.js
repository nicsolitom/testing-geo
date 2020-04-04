//?     https://www.npmjs.com/package/geo-distance

//? USAGE EXAMPLE:
var Distance = require('geo-distance');

console.log('' + Distance('50 km').human_readable('customary'));

// https://www.latlong.net/place/oslo-norway-14195.html: Oslo, Norway, Latitude and longitude coordinates are: 59.911491, 10.757933
var Oslo = {
  lat: 59.914,
  lon: 10.752
};
var Berlin = {
  lat: 52.523,
  lon: 13.412
};
var OsloToBerlin = Distance.between(Oslo, Berlin);

console.log("Oslo to Berlin:");

console.log('' + OsloToBerlin.human_readable());
if (OsloToBerlin > Distance('800 km')) {
  console.log('Nice journey!');
}


//? Testing Tyresö (Sweden) to Berlin

var Tyreso = {
  lat: 59.238,
  lon: 18.317
};

var TyresoToBerlin = Distance.between(Tyreso, Berlin);

console.log();
console.log("Tyresö (Sweden) to Berlin:");

console.log('' + TyresoToBerlin.human_readable());
if (OsloToBerlin > Distance('800 km')) {
  console.log('Nice journey!');
}


//? Testing Sonntagstrasse 6 Berlin, to Neue Bahnhofstrasse 1 Berlin

var SonntagstrasseSix = {
  lat: 52.505292,
  lon: 13.4670571
};

var NeueBahnhofstrasseEins = {
  lat: 52.5046177,
  lon: 13.4690677
};

var SonntagstrToNeueBahnhofstr = Distance.between(SonntagstrasseSix, NeueBahnhofstrasseEins);

console.log();
console.log("Sonntagstrasse 6 to Neue Bahnhofstrasse 1:");

console.log('' + SonntagstrToNeueBahnhofstr.human_readable());
if (SonntagstrToNeueBahnhofstr > Distance('800 km')) {
  console.log('Nice journey!');
}
