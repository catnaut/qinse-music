// app/components/ImageWithButton.tsx

import React, { useState } from 'react';

const ImageWithButton: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative w-full h-full">
      <img
        src="/images/song1.jpg"
        alt="Your Image"
        className="w-full h-auto"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      />
      <img
        src="/images/song2.jpg"
        alt="Your Image"
        className="w-full h-auto"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      />
      {isHovered && (
        <button
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-500 text-white px-4 py-2 rounded-lg"
          onClick={() => alert('Button clicked!')}
        >
          Click Me
        </button>
      )}
    </div>
    
  );
};

export default ImageWithButton;
