# simple-storage

Simplifies localStorage by auto-casting data types.

## Usage

Add [simple-storage.min.js](dist/simple-storage.min.js) to your project:

```html
<script src="simple-storage.min.js"></script>
```

```js
/**
 * Save an item to local storage
 * @param {string} key - variable name
 * @param {any} value - value of variable to save
 * @return {void}
 */
simpleStorage.set('userSettings', {
  theme: 'dark',
  notifications: true
});

/**
 * Get an item from local storage
 * @param {string} key - variable name
 * @return {any} correctly cast value if it exists
 */
var userSettings = simpleStorage.get('userSettings');

/**
 * Check if item exists in local storage
 * @param {string} key - variable name
 * @return {boolean} true if key exists, otherwise false
 */
if (simpleStorage.exists('userSettings')) {
  console.log('User settings available!');
}

/**
 * Remove an item from local storage
 * @param {string} key - variable name
 * @return {void}
 */
simpleStorage.remove('userSettings');

/**
 * Clear all local storage values
 * @return {void}
 */
simpleStorage.clear();
```