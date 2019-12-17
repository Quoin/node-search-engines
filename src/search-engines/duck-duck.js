import SearchEngine from './model';

export default new SearchEngine(
    'DuckDuck',
    [
        'https://duckduckgo.com/duckduckbot',
        '+http://duckduckgo.com'
    ],
    [
        '23.21.226.191/32',
        '54.208.102.37/32',
        '72.94.249.32/29',
        '107.20.237.51/32',
        '107.21.1.8/32'
    ]
);
