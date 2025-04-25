
import React, { useState } from 'react';
import { AlertTriangle, X } from 'lucide-react';

const AlertBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-[#FFF9C2] border-y border-[#FFD700] text-black py-2">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-start gap-2">
            <AlertTriangle className="h-5 w-5 flex-shrink-0 mt-0.5 text-[#B30000]" />
            <div className="text-sm">
              <span className="font-bold">Important:</span> This is a clone website for demonstration purposes only. 
              For official tax information, please visit the official IRS website at{' '}
              <a 
                href="https://www.irs.gov" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-irs-blue-light underline hover:no-underline"
              >
                www.irs.gov
              </a>.
            </div>
          </div>
          <button 
            className="flex-shrink-0 ml-2" 
            onClick={() => setIsVisible(false)}
            aria-label="Close alert"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AlertBanner;
