
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HomeHero from '@/components/HomeHero';
import QuickLinks from '@/components/QuickLinks';
import NewsSection from '@/components/NewsSection';
import AlertBanner from '@/components/AlertBanner';
import TaxNotice from '@/components/TaxNotice';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <AlertBanner />
      <Header />
      <main className="flex-grow">
        <HomeHero />
        <TaxNotice />
        <QuickLinks />
        <NewsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
