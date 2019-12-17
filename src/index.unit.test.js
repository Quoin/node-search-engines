import testHelpers from '@quoin/node-test-helpers';

import Model from './search-engines/model';

import * as moduleToTest from './index';

const expect = testHelpers.expect;

describe("src/index", () => {
    it("should expose an object", () => {
        expect(moduleToTest).to.be.an('object');
    });

    describe("properties", () => {
        let clone;

        before(() => {
            clone = { ...moduleToTest };
        });

        after(() => {
            expect(clone).to.be.empty();
        });

        describe("find()", () => {
            after(() => {
                delete clone.find;
            });

            it(`has function "find()" with 2 params`, () => {
                expect(clone).to.have.property('find');
                expect(clone.find).to.have.lengthOf(2);
            });

            it(`finds nothing when no criteria match`, () => {
                const value = moduleToTest.find('', '');
                expect(value).to.be.undefined();
            });

            it(`finds instance of Model when criteria match`, () => {
                const value = moduleToTest.find('', 'gocrawl');
                expect(value).to.be.an.instanceOf(Model);
            });
        });

        describe("get()", () => {
            after(() => {
                delete clone.get;
            });

            it(`has function "get()" with 1 param`, () => {
                expect(clone).to.have.property('get');
                expect(clone.get).to.have.lengthOf(1);
            });

            it(`returns undefined for unknown name`, () => {
                const value = moduleToTest.get('foobar');
                expect(value).to.be.undefined();
            });

            it(`returns an instance of Model with known name`, () => {
                const value = moduleToTest.get('Googlebot');
                expect(value).to.be.an.instanceOf(Model);
            });
        });

        describe("listNames()", () => {
            after(() => {
                delete clone.listNames;
            });

            it(`has function "listNames()" with no params`, () => {
                expect(clone).to.have.property('listNames');
                expect(clone.listNames).to.have.lengthOf(0);
            });

            it(`returns a list of strings`, () => {
                const values = clone.listNames();
                expect(values).to.be.an('array');
                values.forEach((value, index) => expect(value, `Value '${value}' at index ${index} is not a string`).to.be.a('string'));
            });
        });

        describe(`match()`, () => {
            after(() => {
                delete clone.match;
            });

            it(`has function "match()" with 2 params`, () => {
                expect(clone).to.have.property('match');
                expect(clone.match).to.have.lengthOf(2);
            });

            it(`returns false when no match`, () => {
                const value = clone.match('', '');
                expect(value).to.be.false();
            });

            it(`returns true when match`, () => {
                const value = clone.match('', 'gocrawl');
                expect(value).to.be.true();
            });
        });
    });
});
