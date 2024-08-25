// src/components/Preloader.js
import React, { useState, useEffect } from 'react';

const Preloader = ({ onLoad }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading process with a timeout
    const timer = setTimeout(() => {
      setLoading(false);
      if (onLoad) onLoad(); // Call the onLoad function if provided
    }, 3000); // Duration of the preloader

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, [onLoad]);

  if (!loading) return null; // Hide preloader once loading is complete

  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700 absolute top-0 left-0 z-50">
      <div className="flex flex-wrap justify-center gap-4">
        <div className="w-12 h-12 bg-blue-600 animate-bounce rounded"></div>
        <div className="w-12 h-12 bg-blue-600 animate-bounce delay-200 rounded"></div>
        <div className="w-12 h-12 bg-blue-600 animate-bounce delay-400 rounded"></div>
        <div className="w-12 h-12 bg-blue-600 animate-bounce delay-600 rounded"></div>
        <div className="w-12 h-12 bg-blue-600 animate-bounce delay-800 rounded"></div>
      </div>
      <div className="mt-4 text-xl text-white">Loading your tasks...</div>
    </div>
  );
};

export default Preloader;
