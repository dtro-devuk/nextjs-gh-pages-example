/**
 * Hamburger Toggle Button with animation
 * @description Toggle Burger button, open and close animations and aria support
 * @author dtro-devuk @github:dtro-devuk.io
 */

import React from 'react';
import { bool, func } from 'prop-types';

/**
 * Hamburger Toggle Button
 * With animated Open and Close, animations courtesy of Johnshu, see readme for attributions
 * @param {*} param0
 */
const Hamburger = ({ open, setOpen, ...props }) => {
  const isOpen = open ? true : false;

  /**
   * Show/Hide the Menu
   */
  const handleToggleMenuClick = (event, open) => {
    if (event.ctrlKey || event.metaKey || event.shiftKey) {
      return; // let the browser deal with the click natively
    }

    event.preventDefault();

    setOpen(open);
  };

  return (
    <button
      className={`hamburger--spring-r ${open ? 'is-active' : ''}
            fill-current
            md:p-3 ml-3 mr-4 
            lg:hidden lg:ml-0 lg:w-0 
            text-gray-300 hover:text-yellow-500             
            rounded
            transform hover:scale-125 hover:bg-opacity-50 transition ease-out duration-500
            focus:text-white
            focus:outline-none`}
      id="hamburger-btn"
      aria-label="Hamburger Menu Toggle Button"
      aria-expanded={isOpen}
      aria-controls="{menuId}"
      type="button"
      tabIndex="0"
      onClick={(event) => handleToggleMenuClick(event, !open)}
      {...props}
    >
      <span className="hamburger-box">
        <span className="hamburger-inner rounded"></span>
      </span>
    </button>
  );
};

Hamburger.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};

export default Hamburger;
