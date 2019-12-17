const CIDRMatcher = require('cidr-matcher');

class SearchEngine {
    constructor(name, userAgents, cidrs) {
        this._name = name;

        this._userAgents = Object.freeze(userAgents.reduce(
            (userAgents, userAgent) => {
                if (userAgent) {
                    return userAgents.concat(userAgent.toLowerCase());
                } else {
                    return userAgents;
                }
            },
            []
        ));

        if (cidrs && cidrs.length) {
            this._cidrMatcher = new CIDRMatcher();
            cidrs.forEach((cidr, index) => {
                try {
                    if (cidr) {
                        this._cidrMatcher.addNetworkClass(cidr);
                    }
                } catch (err) {
                    console.error(`Ignoring invalid cidr='${cidr}' at position ${index}. Err=`, err);
                }
            });
        }
    }

    get name() {
        return this._name;
    }

    match(ipAddress, userAgentString) {
        let matchCidr = true;
        if (this._cidrMatcher) {
            matchCidr = this._cidrMatcher.contains(ipAddress);
        }

        if (typeof userAgentString !== 'string') {
            userAgentString = '';
        }

        let matchUserAgent = true;
        if (this._userAgents && this._userAgents.length) {
            matchUserAgent = this._userAgents.reduce(
                (isValidUserAgent, userAgent) => isValidUserAgent || userAgentString.toLowerCase().indexOf(userAgent) !== -1,
                false
            );
        }

        return matchCidr && matchUserAgent;
    }
}

module.exports = SearchEngine;
