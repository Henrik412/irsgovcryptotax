
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const NewsSection: React.FC = () => {
  const newsItems = [
    {
      title: 'New Tax Credits Available for Energy Efficient Home Improvements',
      date: 'April 22, 2025',
      summary: 'The IRS has announced new tax credits for homeowners who make qualifying energy-efficient improvements to their homes.',
      link: '#',
    },
    {
      title: 'IRS Extends Relief for Certain Taxpayers Affected by Natural Disasters',
      date: 'April 18, 2025',
      summary: 'The IRS is providing tax relief for victims of severe storms and flooding in designated disaster areas.',
      link: '#',
    },
    {
      title: 'Important Updates to Tax Filing Requirements for Gig Economy Workers',
      date: 'April 10, 2025',
      summary: 'Freelancers and independent contractors should be aware of new reporting requirements effective for the 2025 tax year.',
      link: '#',
    },
  ];

  return (
    <div className="py-8 md:py-12 bg-irs-gray">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-irs-gray-dark">News and Updates</h2>
          <a href="#" className="text-irs-blue-light hover:underline hidden md:inline-block">
            View all news
          </a>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {newsItems.map((item, index) => (
            <Card key={index} className="border shadow-sm">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">{item.title}</CardTitle>
                <CardDescription className="text-sm text-gray-500">{item.date}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-sm">{item.summary}</p>
              </CardContent>
              <CardFooter>
                <Button variant="link" className="p-0 text-irs-blue-light">
                  Read more
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-6 text-center md:hidden">
          <Button variant="outline" className="border-irs-blue text-irs-blue">
            View all news
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NewsSection;
