// src/components/Preloader.js
import React, { useEffect, useState } from 'react';
import './Preloader.css';

const Preloader = () => {
  const [showPreloader, setShowPreloader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPreloader(false);
    }, 5000); // Adjust the duration as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    showPreloader && (
      <div className="preloader">
        <div className="preloader-content">
          <p className="funny-line">"Hang on!! Loading you tasks..."</p>
          <div className="blocks">
            <div className="block"></div>
            <div className="block"></div>
            <div className="block"></div>
            <div className="block"></div>
          </div>
        </div>
      </div>
    )
  );
};

export default Preloader;
