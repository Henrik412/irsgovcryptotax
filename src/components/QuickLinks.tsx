
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { File, Calendar, Folder, Search, User, Settings } from 'lucide-react';

const QuickLinks: React.FC = () => {
  const links = [
    {
      title: 'File and Pay',
      description: 'File your federal taxes and make payments',
      icon: <File className="h-6 w-6" />,
      link: '#',
    },
    {
      title: 'Refunds',
      description: 'Check your refund status',
      icon: <Search className="h-6 w-6" />,
      link: '#',
    },
    {
      title: 'Tax Records',
      description: 'Access your tax records',
      icon: <Folder className="h-6 w-6" />,
      link: '#',
    },
    {
      title: 'Tax Calendar',
      description: 'Important tax dates and deadlines',
      icon: <Calendar className="h-6 w-6" />,
      link: '#',
    },
    {
      title: 'Your Account',
      description: 'Access your IRS online account',
      icon: <User className="h-6 w-6" />,
      link: '#',
    },
    {
      title: 'Tax Tools',
      description: 'Calculators and other helpful resources',
      icon: <Settings className="h-6 w-6" />,
      link: '#',
    },
  ];

  return (
    <div className="py-8 md:py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6 text-irs-gray-dark border-b pb-2">Popular Tax Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {links.map((link, index) => (
            <Card key={index} className="border hover:shadow-md transition-shadow">
              <a href={link.link} className="block h-full">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3">
                    <div className="text-irs-blue">{link.icon}</div>
                    <CardTitle className="text-irs-blue-light">{link.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>{link.description}</CardDescription>
                </CardContent>
              </a>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuickLinks;
