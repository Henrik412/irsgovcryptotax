
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const HomeHero: React.FC = () => {
  return (
    <div className="bg-irs-gray py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-6">
          {/* Main announcement */}
          <Card className="md:col-span-2 p-6 shadow-md border-l-4 border-l-irs-blue">
            <h1 className="text-2xl md:text-3xl font-bold text-irs-gray-dark mb-4">
              Tax Filing Season Is Here
            </h1>
            <p className="text-gray-700 mb-6">
              The deadline to file and pay your federal income taxes is April 15, 2025. 
              Get started now to ensure timely filing and avoid penalties.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button className="bg-irs-blue hover:bg-irs-blue-light">File Your Taxes</Button>
              <Button variant="outline" className="border-irs-blue text-irs-blue hover:bg-irs-gray">
                Check Refund Status
              </Button>
            </div>
          </Card>
          
          {/* Quick access card */}
          <Card className="bg-white p-6 shadow-md">
            <h2 className="text-lg font-bold mb-4 text-irs-gray-dark">I need to...</h2>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-irs-blue-light hover:underline block py-1">Make a payment</a>
              </li>
              <li>
                <a href="#" className="text-irs-blue-light hover:underline block py-1">Get my tax record</a>
              </li>
              <li>
                <a href="#" className="text-irs-blue-light hover:underline block py-1">Get an extension</a>
              </li>
              <li>
                <a href="#" className="text-irs-blue-light hover:underline block py-1">Check my refund status</a>
              </li>
              <li>
                <a href="#" className="text-irs-blue-light hover:underline block py-1">Resolve an issue</a>
              </li>
            </ul>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
