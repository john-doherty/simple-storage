require('./local-storage-mock.js');
var simpleStorage = require('../src/simple-storage.js');

describe('simpleStorage interface', function() {

    it('should expose the correct methods', function () {
        expect(simpleStorage.get).toBeDefined();
        expect(simpleStorage.set).toBeDefined();
        expect(simpleStorage.remove).toBeDefined();
        expect(simpleStorage.exists).toBeDefined();
        expect(simpleStorage.clear).toBeDefined();
    });
});
