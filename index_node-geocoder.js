const nodeGeocoder = require('node-geocoder');

let options = {
    provider: 'openstreetmap'
};

let geoCoder = nodeGeocoder(options);

geoCoder.geocode('Sonntagstrasse 6, Berlin')
.then((res) => {
    console.log("Result:");
    console.log(res);
})
.catch((err)=> {
    console.log("Error:");
    console.log(err);
})

//? Result from 'Sonntagstrasse 6, Berlin':

/*
{
  latitude: 52.505292,
  longitude: 13.4670571,
  formattedAddress: "An's Tea House, 6, Sonntagstraße, Samariterviertel, Friedrichshain, Friedrichshain-Kreuzberg, Berlin, 10245, Deutschland",
  country: 'Deutschland',
  city: undefined,
  state: 'Berlin',
  zipcode: '10245',
  streetName: 'Sonntagstraße',
  streetNumber: '6',
  countryCode: 'DE',
  neighbourhood: 'Samariterviertel',
  provider: 'openstreetmap'
}
*/

//? Result from 'Fiskarrovägen, Tyresö':
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


//? Result from 'Neue Bahnhofstrasse 1, Berlin':

/*

[
  {
    latitude: 52.5046177,
    longitude: 13.4690677,
    formattedAddress: '1, Neue Bahnhofstraße, Stralau, Friedrichshain, Friedrichshain-Kreuzberg, Berlin, 10245, Deutschland',
    country: 'Deutschland',
    city: undefined,
    state: 'Berlin',
    zipcode: '10245',
    streetName: 'Neue Bahnhofstraße',
    streetNumber: '1',
    countryCode: 'DE',
    neighbourhood: 'Stralau',
    provider: 'openstreetmap'
  }
]

*/