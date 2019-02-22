var express = require('express');
var router = express.Router();
var date = new Date();
var filename = 'public/sitemap/sitemap'+date.getTime()+'.xml';
const SitemapGenerator = require('sitemap-generator');
 
// create generator
const generator = SitemapGenerator('https://test.avenue.in', {
  maxDepth: 0,
  filepath: filename,
  maxEntriesPerFile: 50000,
  stripQuerystring: true
});
 
// register event listeners
generator.on('done', () => {
  console.log('Done');
});
 
// start the crawler
generator.start();



/* var scrape = require('html-metadata');
 
var url = "https://test.avenue.in/";
 
scrape(url).then(function(metadata){
    console.log(metadata,' ------------------------ metadata');
    //res.send(JSON.stringify(metadata));
},function (error) {
    console.log(error);
    //res.send(JSON.stringify(error));
}); */

router.get('/', function(req, res, next) {
  
});

module.exports = router;
