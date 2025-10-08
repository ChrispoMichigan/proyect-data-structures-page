import React from 'react';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-16 px-4 animate-fade-down">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-bounce-in">
          Visualización de estructuras de datos
        </h1>
        <p className="text-xl md:text-2xl opacity-90 animate-fade-in animate-delay-500">
          Explora y comprende las estructuras de datos fundamentales
        </p>
      </div>
    </header>
  );
};

export default Header;
