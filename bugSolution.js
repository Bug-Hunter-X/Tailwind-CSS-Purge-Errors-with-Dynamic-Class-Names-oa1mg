The solution involves correctly configuring the `content` option (in Tailwind CSS v3+) or adjusting the `purge` option (in older versions) within your `tailwind.config.js`.  Instead of explicitly listing files, which might miss dynamically generated classes, you should use a pattern that captures all relevant files where classes could be generated.  The `content` option now uses glob patterns, improving coverage of dynamic classes. For example:

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ 
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```
This ensures that all `.js`, `.ts`, `.jsx`, and `.tsx` files within the `pages` and `components` directories are scanned for classes, thus preventing the purging of dynamically generated classes.