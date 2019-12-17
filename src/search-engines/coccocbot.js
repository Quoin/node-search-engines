const SearchEngine = require('./model');

module.exports = new SearchEngine(
    'coccocbot',
    [
        '+http://help.coccoc.com/searchengine'
    ],
    [
        '103.131.68.0/22',
        '123.16.0.0/12'
    ]
);
