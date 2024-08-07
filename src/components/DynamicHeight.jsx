import React, { useEffect, useState } from 'react';

function DynamicHeightComponent({ children }) {
  const [dynamicHeight, setDynamicHeight] = useState(window.innerHeight - 72); // Adjust 72px as needed

  // Function to update the dynamic height when the window resizes
  const updateDynamicHeight = () => {
    const newHeight = window.innerHeight - 72; // Adjust 72px as needed
    setDynamicHeight(newHeight);
  };

  // Add an event listener for window resize
  useEffect(() => {
    window.addEventListener('resize', updateDynamicHeight);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', updateDynamicHeight);
    };
  }, []);

  return (
    <div className='flex flex-col items-center justify-center' style={{ minHeight: dynamicHeight }}>
      {children}
    </div>
  );
}

export default DynamicHeightComponent;
