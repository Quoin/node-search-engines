const SearchEngine = require('./model');

module.exports = new SearchEngine(
    'Mail.RU_bot',
    [
        'Mail.RU_Bot'
    ],
    [
        '95.163.248.0/21',
        '217.69.128.0/20'
    ]
);
