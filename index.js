const nodeGeocoder = require('node-geocoder');

let options = {
    provider: 'openstreetmap'
};

let geoCoder = nodeGeocoder(options);

geoCoder.geocode('Sonntagstrasse 1, Berlin')
.then((res) => {
    console.log("Result:");
    console.log(res);
})
.catch((err)=> {
    console.log("Error:");
    console.log(err);
})