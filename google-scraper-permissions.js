//We need the required functionality "google store scraper"
var gplay = require('google-play-scraper');

//Depending on the user's input, we wish to use the API's search functionality to determine the closest match.
//
let searchQuery = "uber eats";

let returnedSearch = null;

returnedSearch = gplay.search({
    term: searchQuery,
    num: 2
  });

  console.log(returnedSearch);