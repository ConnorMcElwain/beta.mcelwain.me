// components/Link.js
import React from 'react';

const Link = ({ href, children }) => {
  return (
    <a href={href} target="_blank" style={{ color: 'blue', textDecoration: 'underline' }}>
      {children}
    </a>
  );
};

export default Link;
