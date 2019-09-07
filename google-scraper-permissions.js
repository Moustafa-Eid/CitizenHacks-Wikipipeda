//Let's test the functionality out

var store = require('app-store-scraper');

store.app({id: 553834731}).then(console.log).catch(console.log);