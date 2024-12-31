# Tailwind CSS Purge Error with Dynamic Classes

This repository demonstrates a common issue when using Tailwind CSS with dynamic class names.  The problem occurs because Tailwind's `purge` option (or its equivalent in newer versions) removes unused CSS classes, but sometimes misidentifies classes generated dynamically at runtime. This leads to missing styles in your application.

## Steps to Reproduce

1. Clone this repository.
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`
4. Observe that some elements lack styling because the corresponding CSS classes have been purged.

## Solution

The solution is to configure the purge option correctly in your `tailwind.config.js`.  You often need to specify the paths to your templates and components or use a more advanced strategy (e.g., using a `content` option) to ensure that Tailwind includes all used CSS classes, even those generated dynamically.  The solution file demonstrates this.

This example highlights the importance of correctly understanding and configuring the purge or content options in Tailwind to prevent unexpected styling issues in applications using dynamically generated CSS classes.