import PropTypes from 'prop-types';

import '@/styles/site.css';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;

MyApp.propTypes = {
  Component: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  pageProps: PropTypes.object.isRequired,
};
