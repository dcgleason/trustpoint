import React from 'react';

const WireSpiral = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      <div className="absolute bottom-0 left-1/2 w-1 h-0 bg-gray-800 origin-bottom animate-wire-grow">
        {[...Array(4)].map((_, index) => (
          <div
            key={index}
            className="absolute bottom-0 w-px h-0 bg-gray-600 animate-small-wire-grow"
            style={{
              left: `${45 + index * 3}%`,
              animationDelay: `${index * 0.2}s`,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default WireSpiral;