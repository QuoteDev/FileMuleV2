import React from 'react';

interface SpaceProps {
  space: string;
}

const SpaceDiv: React.FC<SpaceProps> = ({ space }) => {
  const style: React.CSSProperties & { [key: string]: string | number } = {
    '--space': space,
  };

  return <div className="space" style={style}></div>;
};

export default SpaceDiv;