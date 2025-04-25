
import React, { useState } from 'react';
import { Search, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Logo from './Logo';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const mainNavLinks = [
    { title: 'File', link: '#' },
    { title: 'Pay', link: '#' },
    { title: 'Refunds', link: '#' },
    { title: 'Credits & Deductions', link: '#' },
    { title: 'Forms & Instructions', link: '#' },
  ];

  const topNavLinks = [
    { title: 'Help', link: '#' },
    { title: 'News', link: '#' },
    { title: 'Contact', link: '#' },
  ];

  return (
    <header className="shadow-sm">
      {/* Top nav */}
      <div className="bg-irs-blue text-white">
        <div className="container mx-auto px-4 py-1 flex justify-between items-center">
          <p className="text-xs">An official website of the United States Government</p>
          <div className="hidden md:flex space-x-6 text-sm">
            {topNavLinks.map((link, index) => (
              <a key={index} href={link.link} className="hover:underline">
                {link.title}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="bg-white">
        <div className="container mx-auto px-4 py-3">
          <div className="flex flex-wrap items-center justify-between gap-4">
            {/* Logo section */}
            <div className="flex items-center">
              <a href="/" className="flex items-center space-x-2">
                <Logo />
              </a>
            </div>

            {/* Search section - hidden on mobile */}
            <div className="hidden md:flex flex-1 max-w-md ml-8">
              <div className="relative w-full">
                <Input
                  type="text"
                  placeholder="Search IRS.gov"
                  className="pr-10 w-full border-irs-blue"
                />
                <Button
                  size="sm"
                  className="absolute right-0 top-0 h-full px-3 bg-irs-blue hover:bg-irs-blue-light"
                >
                  <Search className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="bg-irs-blue-light text-white">
        <div className="container mx-auto px-4">
          {/* Desktop navigation */}
          <ul className="hidden md:flex space-x-6">
            {mainNavLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.link}
                  className="block py-3 px-1 hover:bg-irs-blue transition duration-150"
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile navigation - shown when menu is open */}
          <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
            {/* Mobile search */}
            <div className="py-3">
              <div className="relative w-full">
                <Input
                  type="text"
                  placeholder="Search IRS.gov"
                  className="pr-10 w-full border-white"
                />
                <Button
                  size="sm"
                  className="absolute right-0 top-0 h-full px-3 bg-irs-blue hover:bg-irs-blue-light"
                >
                  <Search className="h-4 w-4" />
                </Button>
              </div>
            </div>
            
            {/* Mobile main links */}
            <ul className="py-2">
              {mainNavLinks.map((link, index) => (
                <li key={index} className="border-b border-irs-blue">
                  <a
                    href={link.link}
                    className="block py-2 hover:bg-irs-blue transition duration-150"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
            
            {/* Mobile top links */}
            <ul className="py-2 mb-2">
              {topNavLinks.map((link, index) => (
                <li key={index} className="border-b border-irs-blue">
                  <a
                    href={link.link}
                    className="block py-2 hover:bg-irs-blue transition duration-150"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
