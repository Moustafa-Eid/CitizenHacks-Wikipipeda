//We need the required functionality "google store scraper"
var gplay = require('google-play-scraper');

//Depending on the user's input, we wish to use the API's search functionality to determine the closest match.
//
let searchQuery = "uber eats";

let returnedSearch = null;

let requestedURL = null;

returnedSearch = gplay.search({
    term: searchQuery,
    num: 1
  });

//Testing - since this is an asyncronous call to the server, we obtain a promise. THIS IS EXPECTED.
console.log(returnedSearch);

//We must call .then to allow the promise to be returned back to us. This returns, correctly, the JSON object that we wish to extract information from.
//Ref: https://stackoverflow.com/questions/38884522/why-is-my-asynchronous-function-returning-promise-pending-instead-of-a-val

requestedURL = returnedSearch.then(function(result){
  printer(result);
});
//Extract the URL since that is what we'll be piping into the app for comparison of the dependencies. There's a quirk here, since the actual payload is inside an array. That explains the "0" before the indexing to "url".

//Processing function to parse through the URL, and use it in a new search.
printer = function (result){
  console.log(result[0]);
  //Link is obtained and printed out for easy viewing/debugging - this is the direct google link. Format: https://play.google.com/store/apps/details?id=com.ubercab.eats

  //Aptoide relevant link: https://en.aptoide.com/search?query=Uber+Eats%3A+Local+Food+Delivery&type=apps&type=apps

  // ->> What we need then: Uber Eats: Local Food Delivery AS THE TITLE. Remove all white space/special characters and then send this information as an evenly spaced search query to aptoide. Obtain the resultant permissions.
  //Aptoide would be possible.. but I'm not too sure of how I'd navigate through the web page + scrape the important information, strictly in JS.
  //Will have to check something else... maybe some sort of Twitter scraper...

}

