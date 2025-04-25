
import React from 'react';
import Logo from './Logo';

const Footer: React.FC = () => {
  const footerLinks = [
    {
      title: 'Tax Information',
      links: [
        { text: 'Individuals', url: '#' },
        { text: 'Businesses', url: '#' },
        { text: 'Charities & Non-Profits', url: '#' },
        { text: 'Government Entities', url: '#' },
        { text: 'Tax Professionals', url: '#' },
      ],
    },
    {
      title: 'Online Services',
      links: [
        { text: 'Make a Payment', url: '#' },
        { text: 'Check Your Refund Status', url: '#' },
        { text: 'Get Your Tax Record', url: '#' },
        { text: 'Get an Identity Protection PIN', url: '#' },
        { text: 'Apply for an ITIN', url: '#' },
      ],
    },
    {
      title: 'Help & Resources',
      links: [
        { text: 'Tax Forms and Instructions', url: '#' },
        { text: 'Where to File', url: '#' },
        { text: 'Contact Your Local Office', url: '#' },
        { text: 'Taxpayer Advocate Service', url: '#' },
        { text: 'Report Phishing', url: '#' },
      ],
    },
  ];

  return (
    <footer className="bg-irs-gray-dark text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Agency information */}
          <div>
            <div className="mb-4">
              <Logo />
            </div>
            <p className="text-sm text-gray-300 mb-4">
              Working to provide America's taxpayers top quality service by helping them understand
              and meet their tax responsibilities.
            </p>
          </div>
          
          {/* Footer link columns */}
          {footerLinks.map((column, i) => (
            <div key={i}>
              <h3 className="font-bold mb-4 text-md">{column.title}</h3>
              <ul className="space-y-2">
                {column.links.map((link, j) => (
                  <li key={j}>
                    <a href={link.url} className="text-sm text-gray-300 hover:text-white hover:underline">
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Bottom footer */}
        <div className="mt-12 pt-6 border-t border-gray-600">
          <div className="flex flex-col md:flex-row md:justify-between text-sm text-gray-400">
            <div className="flex flex-wrap gap-4 mb-4 md:mb-0">
              <a href="#" className="hover:text-white hover:underline">Privacy Policy</a>
              <a href="#" className="hover:text-white hover:underline">Accessibility</a>
              <a href="#" className="hover:text-white hover:underline">Civil Rights</a>
              <a href="#" className="hover:text-white hover:underline">No FEAR Act</a>
              <a href="#" className="hover:text-white hover:underline">Freedom of Information Act</a>
            </div>
            <div>
              <p>© 2025 Internal Revenue Service</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
