const SearchEngine = require('./model');

module.exports = new SearchEngine(
    'Daum',
    [
        'Daum 4.1',
        '+http://cs.daum.net/faq'
    ],
    [
        '203.133.160.0/19'
    ]
);
