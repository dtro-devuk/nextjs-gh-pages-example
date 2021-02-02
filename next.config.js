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

    webpack: (config) => {
      // Support SVG loading https://stackoverflow.com/a/55180310
      config.module.rules.push({
        test: /\.svg$/,
        issuer: {
          test: /\.(js|ts)x?$/,
        },
        use: ['@svgr/webpack'],
      });

      return config;
    },
  },
]);
