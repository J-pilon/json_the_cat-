const { fetchBreedDescription } = require('./breedFetcher');

const name = process.argv.slice(2).join();
const breedName = name.slice(0,4);

fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.log('Error fetch details:', error);
    
  } else {
    console.log(desc);
   
  }
});