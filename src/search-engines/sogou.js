const SearchEngine = require('./model');

module.exports = new SearchEngine(
    'Sogou',
    [
        'Sogou web spider'
    ],
    [
        '103.115.148.0/22',
        '121.195.187.0/24',
    ]
);
