/**
 * Header Component
 * @description Site Header including the Navigation menu
 * @author dtro-devuk @github:dtro-devuk.io
 */
import PropTypes from 'prop-types';

import NavBar from '@/components/Navbar';

const Header = ({ caption, author, description }) => {
  return (
    <header
      id="header"
      role="banner"
      className="sticky-header
              flex flex-col items-center text-center
              bg-gray-800"
    >
      <div
        className="p-3 font-black
               text-2xl md:text-3xl lg:text-4xl
               text-white"
      >
        {caption || ''}
      </div>
      <NavBar author={author} />

      <div className="bg-gray-300 w-full">
        <section aria-label="Demo description">
          <h1 className="p-3 m-3 font-bold text-gray-700 italic font-sans text-xl text-center">
            {description}
          </h1>
        </section>
      </div>
    </header>
  );
};

export default Header;

Header.propTypes = {
  caption: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
