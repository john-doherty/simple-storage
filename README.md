# simple-storage

Simplifies localStorage by auto-casting data types.

## Usage

Add [simple-storage.min.js](dist/simple-storage.min.js) to your project:

```html
<script src="simple-storage.min.js"></script>
```

```js
// Save an item to local storage (no need to JSON.stringify)
simpleStorage.set('userSettings', {
  theme: 'dark',
  notifications: true
});

// Get an item from local storage (no need to JSON.parse)
var userSettings = simpleStorage.get('userSettings');

// Check if item exists in local storage
if (simpleStorage.exists('userSettings')) {
  console.log('User settings available!');
}

// Remove an item from local storage
simpleStorage.remove('userSettings');

// Clear all local storage values
simpleStorage.clear();
```