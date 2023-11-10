// components/ButtonPrimary.js
import React from 'react';

const ButtonPrimary = ({ children, className }) => {
  const scrollToProjects = () => {
    const section = document.getElementById('projects-section');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <button className={`button-primary ${className}`} onClick={scrollToProjects}>
      {children}
    </button>
  );
};

export default ButtonPrimary;
