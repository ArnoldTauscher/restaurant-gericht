import { useState, useEffect } from 'react';
import { SlArrowUp } from "react-icons/sl";

import { SCROLL_TO_TOP_BUTTON_TEXT } from '../../constants/data';

export const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 900) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <button 
      onClick={scrollToTop}
      aria-label={SCROLL_TO_TOP_BUTTON_TEXT.ARIA_LABEL}
      className="scroll-to-top-button"
    >
      <SlArrowUp />
    </button>
  );
};

