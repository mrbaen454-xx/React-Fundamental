import React, { useState, useEffect } from 'react';

const ScrollTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
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
      behavior: 'smooth',
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 p-3 bg-white border border-gray-200 text-gray-600 hover:text-amber-500 hover:bg-gray-50 rounded-full shadow-md hover:shadow-lg transition-all z-50 focus:outline-none focus:ring-2 focus:ring-amber-500"
      aria-label="Scroll to top"
    >
      ↑
    </button>
  );
};

export default ScrollTop;
