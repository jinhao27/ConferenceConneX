const scrape = require('website-scraper');

let options = {
    urls: ['http://paul-themes.com/wp/go-arch/go-arch-dark/about-us/'],
    directory: 'ccx about2'
};

scrape(options).then((result) => {
    console.log("Website succesfully downloaded");
}).catch((err) => {
    console.log("An error ocurred", err);
}); 