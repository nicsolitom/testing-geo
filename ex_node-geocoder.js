//?      https://www.npmjs.com/package/node-geocoder

//? USAGE EXAMPLE:

const NodeGeocoder = require('node-geocoder');
 
const options = {
  provider: 'google',
 
  // Optional depending on the providers
  fetch: customFetchImplementation,
  apiKey: 'YOUR_API_KEY', // for Mapquest, OpenCage, Google Premier
  formatter: null // 'gpx', 'string', ...
};
 
const geocoder = NodeGeocoder(options);
 
// Using callback
const res = await geocoder.geocode('29 champs elysée paris');
 
// output :
[
  {
    latitude: 48.8698679,
    longitude: 2.3072976,
    country: 'France',
    countryCode: 'FR',
    city: 'Paris',
    zipcode: '75008',
    streetName: 'Champs-Élysées',
    streetNumber: '29',
    administrativeLevels: {
      level1long: 'Île-de-France',
      level1short: 'IDF',
      level2long: 'Paris',
      level2short: '75'
    },
    provider: 'google'
  }
];


// //? ADVANCED USAGE 
// //? (only google, here, mapquest, locationiq, and opencage providers)

// const res = await geocoder.geocode({
//     address: '29 champs elysée',
//     country: 'France',
//     zipcode: '75008'
//   });
   
//   // OpenCage advanced usage example
//   const res = await geocoder.geocode({
//     address: '29 champs elysée',
//     countryCode: 'fr',
//     minConfidence: 0.5,
//     limit: 5
//   });
   
//   // Reverse example
   
//   const res = await geocoder.reverse({ lat: 45.767, lon: 4.833 });
   
//   // Batch geocode
   
//   const results = await geocoder.batchGeocode([
//     '13 rue sainte catherine',
//     'another adress'
//   ]);
   
//   // Set specific http request headers:
//   const nodeFetch = require('node-fetch');
   
//   const geocoder = NodeGeocoder({
//     provider: 'google',
//     fetch: function fetch(url, options) {
//       return nodeFetch(url, {
//         ...options,
//         headers: {
//           'user-agent': 'My application <email@domain.com>',
//           'X-Specific-Header': 'Specific value'
//         }
//       });
//     }
//   });