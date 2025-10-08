import React from 'react';
import Header from '../components/homepage/Header';
import Sections from '../components/homepage/Sections';
import Footer from '../components/homepage/Footer';

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Sections />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
