/**
 * Hamburger Menu
 * @description Opens and Close based on properties passed from the associated Hamburger Toggle Button, see Hamburger.js
 * @author dtro-devuk @github:dtro-devuk.io
 */

import React from 'react';
import NextLink from 'next/link';

import { bool } from 'prop-types';
import { string } from 'prop-types';

const HamburgerMenu = ({ open, ...props }) => {
  const isHidden = open ? true : false;
  const isOpen = open;

  return (
    <div
      aria-hidden={!isHidden}
      className={`mt-2 w-full lg:inline-flex lg:flex-grow lg:w-auto 
    ${!isHidden ? 'hidden' : ''}`}
    >
      <div
        className={`lg:translate-y-0
            lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full 
            lg:items-center items-start flex flex-col lg:h-auto
            transition ${
              isOpen
                ? 'translate-y-0 ease-out duration-1000 transform '
                : '-translate-y-full ease-in duration-1000 transform '
            }`}
      >
        <NextLink href="/blog">
          <a
            className={`lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-lg
          text-yellow-500 hover:text-white lg:hover:bg-yellow-500 
          active:text-white focus:outline-none
          transform ${'hover:scale-x-90 transition ease-in-out duration-500'}`}
          >
            Blog
          </a>
        </NextLink>

        <NextLink href="/about">
          <a
            className={`lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-lg
                text-yellow-400 hover:text-white lg:hover:bg-yellow-500 
                active:text-white focus:outline-none 
                transform ${'hover:scale-x-90 transition ease-in-out duration-500'}`}
          >
            About
          </a>
        </NextLink>

        <NextLink href="https://www.github.com/dtro-devuk">
          <a
            className={`lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-lg
                text-yellow-500 hover:text-white lg:hover:bg-yellow-500 
                active:text-yellow-600 focus:outline-none"
                transform ${'hover:scale-x-90 transition ease-in-out duration-500'}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </NextLink>
      </div>
    </div>
  );
};

HamburgerMenu.propTypes = {
  open: bool.isRequired,
};

export default HamburgerMenu;
