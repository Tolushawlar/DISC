// src/components/ProgressBar.js
import React from 'react';

const ProgressBar = ({ progress }) => {
  const progressPercentage = (progress / 60) * 100;
  return (
    <div className="progress-bar" style={{ width: '100%', backgroundColor: '#f3f3f3', height: '20px' }}>
      <div
        style={{
          width: `${progressPercentage}%`,
          backgroundColor: '#4caf50',
          height: '100%',
        }}
      ></div>
    </div>
  );
};

export default ProgressBar;
