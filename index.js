const nodeGeocoder = require('node-geocoder');

let options = {
    provider: 'openstreetmap'
};

let geoCoder = nodeGeocoder(options);