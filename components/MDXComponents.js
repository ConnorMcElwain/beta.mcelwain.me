// components/MDXComponents.js

import React from 'react';

const MDXComponents = {
  // Define your custom MDX components here
  h1: ({ children }) => <h1 className="text-4xl font-bold mb-4">{children}</h1>,
  p: ({ children }) => <p className="text-lg mb-4">{children}</p>,
  // You can add more components as needed
};

export default MDXComponents;
