require('./local-storage-mock.js');
var simpleStorage = require('../src/simple-storage.js');

describe('simpleStorage: casting', function() {

    beforeEach(function() {
        localStorage.clear();
    });

    it('should auto-cast boolean values', function() {
        simpleStorage.set('boolTrue', true);
        expect(simpleStorage.get('boolTrue')).toBe(true);

        simpleStorage.set('boolFalse', false);
        expect(simpleStorage.get('boolFalse')).toBe(false);
    });

    it('should auto-cast integer values', function() {
        simpleStorage.set('int', 123);
        expect(simpleStorage.get('int')).toBe(123);
    });

    it('should auto-cast float values', function() {
        simpleStorage.set('float', 12.34);
        expect(simpleStorage.get('float')).toBe(12.34);
    });

    it('should auto-cast JSON objects and arrays', function() {
        const obj = { a: 1, b: 'test', c: true };
        simpleStorage.set('obj', obj);
        expect(simpleStorage.get('obj')).toEqual(obj);

        const arr = [1, 'two', false];
        simpleStorage.set('arr', arr);
        expect(simpleStorage.get('arr')).toEqual(arr);
    });

    it('should return null for null values', function() {
        simpleStorage.set('null', null);
        expect(simpleStorage.get('null')).toBeNull();
    });

    it('should return undefined for undefined values', function() {
        simpleStorage.set('undefined', undefined);
        // Note: localStorage can't store undefined, so it will be stored as the string "undefined"
        expect(simpleStorage.get('undefined')).toBe(undefined);
    });

    it('should treat strings as strings', function() {
        simpleStorage.set('string', 'hello');
        expect(simpleStorage.get('string')).toBe('hello');
    });
});
