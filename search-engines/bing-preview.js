// The Aspire Web Crawler (http://www.searchtechnologies.com/aspire

const SearchEngine = require('./model');

module.exports = new SearchEngine(
    'BingPreview',
    [
        'BingPreview'
    ],
    [
        '40.74.0.0/15',
        '40.76.0.0/14',
        '40.80.0.0/12',
        '40.96.0.0/12',
        '40.112.0.0/13',
        '40.120.0.0/14',
        '40.124.0.0/16',
        '40.125.0.0/17'
    ]
);
