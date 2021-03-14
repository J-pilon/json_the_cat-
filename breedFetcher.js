const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  const breedNameTrim = breedName.slice(0, 4);
  
  request(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedNameTrim}`, function(error, response, body) {
    const data = JSON.parse(body);
    
    if (error !== null || response.statusCode !== 200) {
      console.log('statusCode:', response && response.statusCode);
      console.error('error:', error);
    }
    

    if (data.length > 0) {
      const breedDesc = data[0].breeds[0].description;
      callback(null, breedDesc);
    } else {
      callback(error, null);
    }
  });
};



module.exports = { fetchBreedDescription };