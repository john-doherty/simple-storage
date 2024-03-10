# simple-storage

**simpleStorage** is a lightweight JavaScript library designed to enhance the usability and functionality of the browser's `localStorage`. It simplifies the process of storing, retrieving, and managing data by automatically handling data type casting. This means you can store and retrieve various data types, including objects, arrays, booleans, and numbers, without worrying about manual serialization or deserialization.

## Key Features
* **Auto-Casting** automatically casts data types when saving and retrieving from localStorage
* **Simplified API** provides an easy-to-use API to interact with localStorage
* **No Dependencies** implemented in vanilla JavaScript
* **Lightweight** less than 1k of pure JS

## Why simple-storage?

Working directly with localStorage often requires repetitive type checking and conversion, which can lead to cluttered code and increased potential for errors. simple-storage abstracts these complexities, allowing developers to focus on the logic and functionality of their applications, not on the nuances of data storage.

## Usage

Add [simple-storage.min.js](dist/simple-storage.min.js) to your project:

```html
<script src="simple-storage.min.js"></script>
```

And use it in your web app:

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

See [unit tests](/tests/simple-storage-casting-spec.js) for more examples.

## Contributing

Pull requests are welcomed:

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request

### Update .min files

To generate a new [simple-storage.min.js](dist/simple-storage.min.js) from source, tweak the version number in `package.json` and run:

```bash
npm run build
```

## Star the repo

If you find this useful ⭐ the repo, it helps me prioritise which bugs to work on.

## History

For change-log, check [releases](https://github.com/john-doherty/simple-storage/releases).

## License

Licensed under [MIT License](LICENSE) &copy; [John Doherty](https://twitter.com/mrJohnDoherty)