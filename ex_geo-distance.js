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

console.log('' + OsloToBerlin.human_readable());
if (OsloToBerlin > Distance('800 km')) {
  console.log('Nice journey!');
}