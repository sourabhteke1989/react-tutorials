const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
    join(__dirname, '../web_app_1/**/*.{ts,tsx,js,jsx}'),
    join(__dirname, '../../packages/web_common/**/*.{ts,tsx,js,jsx}')
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
