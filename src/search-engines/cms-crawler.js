const SearchEngine = require('./model');

module.exports = new SearchEngine(
    'CMSCrawler',
    [
        'http://www.cmscrawler.com'
    ],
    [
        '83.233.207.74/32'
    ]
);
