import React from 'react';
import DiscResultGraph from './DiscResultGraph';

const DiscResultPage = ({ discResult, onRetake }) => {
  return (
    <div>
      <DiscResultGraph discResult={discResult} />
      <button onClick={onRetake}>Retake Test</button>
    </div>
  );
};

export default DiscResultPage;
