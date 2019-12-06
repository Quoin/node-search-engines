# Quoin - Search Engines utility library

This library tries to detect if an access is coming from a search engine.

## Basic usage

    const searchEngines = require('@quoin/search-engines');

    if (searchEngines.match('127.0.0.1', 'Some User Agent')) {
        console.log("This seems to be a search engine.");
    } else {
        console.log("This seems to be a normal visit.");
    }

## API

### `.get(name)`

Gets the search engine defined by `name`. It returns an instance of
`SearchEngine`.

### `.listNames()`

Gets the list of search engine names. The names can then be used with
`.get(name)` call to get the specific search engine instance.

### `.match(ipAddress, userAgentString)`

Finds if the combination of `ipAddress` and `userAgentString` refers to a known
search engine. It returns `true` or `false`.

### `.find(ipAddress, userAgentString)`

Finds the first search engine instance that matches the combination. The
instance of `SearchEngine` is returned.


## Where are the information coming from?

This is a mixed list of manually massaged information from below sites:

- The list of CIDR comes from
  [Free IP2Location Firewall List by Search Engine](https://www.ip2location.com/free/robot-whitelist)

  I've obtained the `Apache .htaccess allow` file format and hand edited them to
  only have the CIDR on each line.

- The user-agent data comes from
  (https://www.rtcx.net/bot-list)[https://www.rtcx.net/bot-list]

  Only `Search Engine` are keep for this repo. Some CIDR not present on above
  source are added from here.

