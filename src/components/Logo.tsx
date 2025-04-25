
import React from 'react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="text-irs-blue font-bold text-xl md:text-2xl">IRS</div>
      <div className="h-6 w-0.5 bg-irs-gray-dark mx-1"></div>
      <div className="text-irs-gray-dark text-xs md:text-sm">
        <div>Internal</div>
        <div>Revenue Service</div>
      </div>
    </div>
  );
};

export default Logo;
