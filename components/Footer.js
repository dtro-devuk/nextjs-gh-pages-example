/**
 * Site Footer Component
 * @description footer elements to be included here
 * @author dtro-devuk @github:dtro-devuk.io
 */
import PropTypes from 'prop-types';

const Footer = ({ caption, author }) => {
  return (
    <footer
      id="main-footer"
      role="contentinfo"
      aria-label="main footer content info"
      className="w-full p-3
            flex flex-col items-center text-center 
            bg-gray-800 "
    >
      <div className="text-white">
        <p className=" text-xl md:text-1xl lg:text-2xl p-3">{caption || ''}</p>
        <p className=" text-xl md:text-1xl lg:text-2xl p-3">
          Copyright <span dangerouslySetInnerHTML={{ __html: '&copy;' }}></span>{' '}
          <a
            href="https://www.github.com/dtro-devuk"
            className=" font-semibold
                text-yellow-600 dark:text-indigo-400 
                hover:text-yellow-200 dark:hover:text-pink-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            {author}
          </a>{' '}
          2021
        </p>
      </div>
    </footer>
  );
};

export default Footer;

Footer.propTypes = {
  caption: PropTypes.string.isRequired,
};
