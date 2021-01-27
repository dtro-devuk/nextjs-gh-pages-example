const withPlugins = require('next-compose-plugins');

const debug = process.env.NODE_ENV !== 'production';

const env = {
  CANONICAL_URL: '',
};

const basePath = !debug ? '/nextjs-gh-pages-example' : '';
const assetPrefix = !debug ? '/nextjs-gh-pages-example/' : '';

module.exports = withPlugins([
  {
    env,
    basePath,
    assetPrefix,
  },
]);
