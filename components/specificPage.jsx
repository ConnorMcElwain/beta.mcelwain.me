import React, { useEffect } from 'react';

export default function SpecificPage() {
  useEffect(() => {
    // Dynamically import FlyonUI CSS only when the component is mounted
    import('flyonui/dist/main.css');
  }, []);

  return (
    <div>
      <button className="btn btn-gradient btn-accent btn-wide btn-lg">Microsoft</button>
    </div>
  );
}
