/**
 * Container
 * @description Main Container for the App
 * @author dtro-devuk @github:dtro-devuk.io
 */
import PropTypes from 'prop-types';

import Head from '@/components/Head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const siteTitle = 'A simple Next 10, Tailwind CSS app deployed to GitHub Project pages';
export const profileName = 'dtro-devuk';
export const description =
  'This demo shows a simple Next 10 app with routing deployed as static html to GitHub Pages.';

const Container = ({ children }) => {
  return (
    <div id="container" className="bg-gray-300">
      <Head title={siteTitle} description={description} />
      <Header caption={siteTitle} author={profileName} description={description} />
      <main
        id="main-content"
        role="main"
        aria-label="main content area for the page"
        className="flex-1 p-3 overflow-y-hidden justify-center 
        mx-2 sm:my-12 sm:text-sm
        md:mx-8 
        leading-relaxed
        bg-white text-gray-700"
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
