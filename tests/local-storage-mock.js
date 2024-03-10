global.localStorage = (function() {
    var store = {};

    return {
        getItem: function(key) {
            return store.hasOwnProperty(key) ? store[key] : null;
        },
        setItem: function(key, value) {
            store[key] = value.toString();
        },
        removeItem: function(key) {
            delete store[key];
        },
        clear: function() {
            store = {};
        },
        hasOwnProperty: function(key) {
            return store.hasOwnProperty(key);
        }
    };
})();
