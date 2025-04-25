
import React, { useState } from 'react';
import { AlertTriangle, Info, X } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const TaxNotice: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="py-6 bg-white">
      <div className="container mx-auto px-4">
        <Card className="border-l-4 border-l-[#FFD700] shadow-md">
          <div className="absolute right-4 top-4">
            <button 
              onClick={() => setIsVisible(false)} 
              className="text-gray-400 hover:text-gray-600"
              aria-label="Close tax notice"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <CardHeader className="flex flex-row items-start gap-3">
            <Info className="h-6 w-6 text-irs-blue mt-1" />
            <div>
              <CardTitle className="text-lg font-bold text-irs-gray-dark">
                Cryptocurrency Tax Compliance Information
              </CardTitle>
              <p className="text-sm text-gray-500 mt-1">Last Updated: April 22, 2025</p>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 text-gray-700">
              <p className="font-medium">
                The IRS reminds taxpayers about reporting requirements for cryptocurrency and digital assets.
              </p>
              
              <div className="space-y-2">
                <h3 className="font-semibold">Key Requirements:</h3>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>All cryptocurrency transactions are reportable events with potential tax implications</li>
                  <li>Virtual currency held as a capital asset is subject to capital gains rules</li>
                  <li>Failure to report may result in interest, penalties, or audit</li>
                  <li>Cryptocurrency received as payment for goods or services is taxable income</li>
                </ul>
              </div>
              
              <div className="space-y-2">
                <h3 className="font-semibold">Tax Year 2025 Updates:</h3>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>Enhanced reporting requirements for digital assets</li>
                  <li>Updated cost basis calculation methods</li>
                  <li>New documentation standards for large transactions</li>
                </ul>
              </div>
              
              <div className="bg-irs-gray p-3 rounded-md text-sm mt-2">
                <p className="font-medium flex items-center gap-2">
                  <AlertTriangle className="h-4 w-4 text-[#B30000]" /> 
                  Important Reminder:
                </p>
                <p className="mt-1">
                  The IRS never initiates contact regarding specific tax issues through email, text messages, or social media. 
                  All official communications about your tax matters come through postal mail.
                </p>
              </div>
              
              <div className="flex mt-2">
                <Button className="bg-irs-blue hover:bg-irs-blue-light text-white">
                  Learn More About Crypto Taxes
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TaxNotice;
