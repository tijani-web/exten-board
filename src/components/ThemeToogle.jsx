import React, { useEffect, useState } from 'react';
import sun from '../assets/images/icon-sun.svg';
import moon from '../assets/images/icon-moon.svg';

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme === 'dark' : true;
  });

  useEffect(() => {
    document.body.className = isDark ? 'dark' : '';
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  return (
    <button className='theme-toggle' onClick={() => setIsDark(prev => !prev)}>
      {isDark ? <img src={sun} alt="Switch to Light Mode" /> : <img src={moon} alt="Switch to Dark Mode" />}
    </button>
  );
};

export default ThemeToggle;
