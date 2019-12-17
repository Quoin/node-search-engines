import searchEngines from './search-engines';

export const find = (ipAddress, userAgent) => searchEngines.find((searchEngine) => searchEngine.match(ipAddress, userAgent));
export const get = (name) => searchEngines.find((searchEngine) => searchEngine.name === name);
export const listNames = () => searchEngines.map((searchEngine) => searchEngine.name);
export const match = (ipAddress, userAgent) => Boolean(find(ipAddress, userAgent));
