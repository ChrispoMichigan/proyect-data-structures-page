import React from 'react';
import Header from '../components/homepage/Header';
import Sections from '../components/homepage/Sections';
import GithubDescription from '../components/GithubDescription';
import Footer from '../components/homepage/Footer';

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Sections />
        <GithubDescription />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
