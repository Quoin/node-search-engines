const CIDRMatcher = require('cidr-matcher');

class SearchEngine {
    constructor(name, userAgents, cidrs) {
        this.name = name;

        this.userAgents = Object.freeze(userAgents.reduce(
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
            this.cidrMatcher = new CIDRMatcher();
            cidrs.forEach((cidr, index) => {
                try {
                    if (cidr) {
                        this.cidrMatcher.addNetworkClass(cidr);
                    }
                } catch (err) {
                    console.error(`Ignoring invalid cidr='${cidr}' at position ${index}. Err=`, err);
                }
            });
        }
    }

    match(ipAddress, userAgentString) {
        let matchCidr = true;
        if (this.cidrMatcher) {
            matchCidr = this.cidrMatcher.contains(ipAddress);
        }

        let matchUserAgent = true;
        if (this.userAgents && this.userAgents.length) {
            matchUserAgent = this.userAgents.reduce(
                (isValidUserAgent, userAgent) => isValidUserAgent || userAgentString.toLowerCase().indexOf(userAgent) !== -1,
                false
            );
        }

        return matchCidr && matchUserAgent;
    }
}

module.exports = SearchEngine;
