'use client'
import React, { useState, useEffect } from 'react';
import './globals.css'; // Import the CSS file for styling

const Spinning = () => {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((rotation) => rotation + 10); // Increase the rotation angle by 10 degrees
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return <div className="spinning absolute m-auto left-0 right-0 top-0 bottom-0" style={{ transform: `rotate(${rotation}deg)` }} />;
};

export default Spinning;
