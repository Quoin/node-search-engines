const SearchEngine = require('./model');

module.exports = new SearchEngine(
    'Bleriot',
    [
        '+https://help.qwant.com/bot',
        '+https://www.qwant.com/'
    ],
    [
        '91.242.162.0/24'
    ]
);
