import React from 'react';
import Star from './Star';

interface StarsProps {
  count: number;
}

const Stars: React.FC<StarsProps> = ({ count }) => {
  if (count < 1 || count > 5 || isNaN(count)) {
    return null;
  }

  const starsArray = new Array(count).fill(undefined);

  return (
    <ul className="card-body-stars u-clearfix">
      {starsArray.map((_, index) => (
        <Star key={index} />
      ))}
    </ul>
  );
};

export default Stars;
