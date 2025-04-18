import React from 'react';

interface Props {
  current: number;
  total: number;
}

const ProgressBar: React.FC<Props> = ({ current, total }) => {
  const percent = (current / total) * 100;
  return (
    <div className="w-full bg-gray-300 rounded-full h-4">
      <div className="bg-orange-500 h-4 rounded-full" style={{ width: `${percent}%` }}></div>
    </div>
  );
};

export default ProgressBar;