const searchEngines = require('./search-engines');

module.exports = Object.freeze({
    get: (name) => searchEngines.find((searchEngine) => searchEngine.name === name),
    listNames: () => searchEngines.map((searchEngine) => searchEngine.name),
    match: (ipAddress, userAgent) => searchEngines.reduce(
        (isMatch, searchEngine) => isMatch || searchEngine.match(ipAddress, userAgent),
        false
    ),
    find: (ipAddress, userAgent) => searchEngines.reduce(
        (foundSearchEngine, searchEngine) => foundSearchEngine || searchEngine.match(ipAddress, userAgent) ? searchEngine : null,
        null
    )
});
