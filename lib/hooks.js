/**
 * Hooks Functions
 * @description Main Global Site Hooks to included here
 * @author dtro-devuk @github:dtro-devuk.io
 */

import { useEffect } from 'react';

/**
 * Use this to determine if the user clicked outside an element (e.g. Nav Bar Menu)
 * @param {*} ref
 * @param {*} handler
 */
export const useOnMouseClickOutsideNav = (ref, handler) => {
  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener('mousedown', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
    };
  }, [ref, handler]);
};
