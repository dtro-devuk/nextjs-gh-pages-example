/**
 * Navigation Menu Bar Component
 * @description Horizontal Vertically expanding Navigation Menu with animations
 * @author dtro-devuk @github:dtro-devuk.io
 */

import NextLink from 'next/link';
import PropTypes from 'prop-types';

import { useState, useRef } from 'react';
import { useOnMouseClickOutsideNav } from '@/lib/hooks.js';

import Avatar from '@/components/Avatar';
import HamBurger from '@/components/Hamburger';
import HamBurgerMenu from '@/components/HamburgerMenu';

/**
 * Main Navigation Menu Bar (Horizontal)
 */
const NavBar = ({ author }) => {
  const [open, setOpen] = useState(false);
  const node = useRef(null);
  const menuId = 'mobile-menu';

  useOnMouseClickOutsideNav(node, () => setOpen(false));

  return (
    <>
      <div ref={node} className="">
        <nav
          id="navbar"
          role="navigation"
          className="mx-auto 
                    px-4 py-3
                    flex items-center justify-between
                    bg-gray-800 flex-wrap 
                    md:py-2"
        >
          <div className="md:p-2">
            <NextLink href="/">
              <a className="inline-flex items-center w-auto cursor-pointer focus:outline-none">
                <Avatar
                  className="h-12 w-12 rounded-full md:mr-2 md:h-20 md:w-20
                            border-4 border-white-200 
                            transform hover:scale-125 hover:bg-opacity-50 transition ease-out duration-500"
                />

                <span
                  className="p-3 font-bold italic
                      text-xl md:text-3xl lg:text-4xl
                      text-blue-400"
                >
                  {author || ''}
                </span>
              </a>
            </NextLink>
          </div>
          <div className="block md:my-2 ml-auto md:w-auto">
            <HamBurger open={open} setOpen={setOpen} aria-controls={menuId} />
          </div>
          <HamBurgerMenu open={open} setOpen={setOpen} id={menuId} />
        </nav>
      </div>
    </>
  );
};

export default NavBar;

NavBar.propTypes = {
  author: PropTypes.string.isRequired,
};
