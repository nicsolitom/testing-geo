const nodeGeocoder = require('node-geocoder');

let options = {
    provider: 'openstreetmap'
};

let geoCoder = nodeGeocoder(options);

geoCoder.geocode('Fiskarrovägen 6, Tyresö')
.then((res) => {
    console.log("Result:");
    console.log(res);
})
.catch((err)=> {
    console.log("Error:");
    console.log(err);
})

//? Result:

/*

[
    {
      latitude: 59.2367755,
      longitude: 18.3169448,
      formattedAddress: 'Fiskarrovägen, Tyresö strand, Tyresö, Tyresö kommun, Stockholms län, Svealand, 135 63, Sverige',
      country: 'Sverige',
      city: 'Tyresö',
      state: 'Stockholms län',
      zipcode: '135 63',
      streetName: 'Fiskarrovägen',
      streetNumber: undefined,
      countryCode: 'SE',
      neighbourhood: '',
      provider: 'openstreetmap'
    }
  ]

*/