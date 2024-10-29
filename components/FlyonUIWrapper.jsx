// FlyonUIWrapper.jsx

import React from 'react';
import 'flyonui/dist/main.css';

export default function FlyonUIWrapper({ children }) {
  return <div className="flyon-ui-scope">{children}</div>;
}

// Usage in a page

import FlyonUIWrapper from './FlyonUIWrapper';

export default function SpecificPage() {
  return (
    <FlyonUIWrapper>
      <button className="btn btn-gradient btn-accent btn-wide btn-lg">Microsoft</button>
    </FlyonUIWrapper>
  );
}
