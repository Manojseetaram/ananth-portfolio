
import React from 'react';

const Marquee = () => {
  return (
    <div className="relative flex overflow-x-hidden">
      {/* First row of marquee items */}
      <div className="py-12 animate-marquee whitespace-nowrap">
        <span className="text-4xl mx-4">Marquee Item 1</span>
        <span className="text-4xl mx-4">Marquee Item 2</span>
        <span className="text-4xl mx-4">Marquee Item 3</span>
        <span className="text-4xl mx-4">Marquee Item 4</span>
        <span className="text-4xl mx-4">Marquee Item 5</span>
      </div>

      {/* Second row of marquee items */}
      <div className="absolute top-0 py-12 animate-marquee2 whitespace-nowrap">
        <span className="text-4xl mx-4">Marquee Item 1</span>
        <span className="text-4xl mx-4">Marquee Item 2</span>
        <span className="text-4xl mx-4">Marquee Item 3</span>
        <span className="text-4xl mx-4">Marquee Item 4</span>
        <span className="text-4xl mx-4">Marquee Item 5</span>
      </div>
    </div>
  );
};

export default Marquee;
