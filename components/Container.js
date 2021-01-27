/**
 * Container
 * @description Main Container for the App
 * @author dtro-devuk @github:dtro-devuk.io
 */
import PropTypes from 'prop-types';

import Head from '@/components/Head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const description =
  'This example configures a simple Next10 and Tailwind CSS app with routing for deployment to GitHub Pages repository.';
export const siteTitle = 'Next 10, Tailwind App deployed to GitHub pages example';
export const profileName = 'dtro-devuk';

const Container = ({ children }) => {
  return (
    <div id="container" className="bg-gray-300">
      <Head title={siteTitle} description={description} />
      <Header caption={siteTitle} author={profileName} description={description} />
      <main
        id="main-content"
        role="main"
        aria-label="main content area for the page"
        className="flex-1 p-3 overflow-y-hidden justify-center bg-white"
      >
        {children}
      </main>
      <Footer caption={siteTitle} author={profileName} />
    </div>
  );
};

export default Container;

Container.propTypes = {
  children: PropTypes.node.isRequired,
};
