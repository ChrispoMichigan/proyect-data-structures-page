import React from 'react';

const CardSection = ({ title, description, color, icon, onClick, delay = 0 }) => {
  const colorClasses = {
    blue: 'from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700',
    green: 'from-green-500 to-green-600 hover:from-green-600 hover:to-green-700',
    purple: 'from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700',
    orange: 'from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700'
  };

  const iconClasses = {
    blue: 'text-blue-100',
    green: 'text-green-100',
    purple: 'text-purple-100',
    orange: 'text-orange-100'
  };

  return (
    <div 
      className={`bg-gradient-to-br ${colorClasses[color]} text-white rounded-lg shadow-lg p-6 cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl animate-fade-in-up`}
      style={{animationDelay: `${delay}ms`}}
      onClick={onClick}
    >
      <div className="text-center">
        <div className={`text-6xl mb-4 ${iconClasses[color]} animate-bounce-in`}>
          {icon}
        </div>
        <h3 className="text-2xl font-bold mb-3 animate-slide-in-left">{title}</h3>
        <p className="text-lg opacity-90 leading-relaxed animate-slide-in-right">
          {description}
        </p>
      </div>
      <div className="mt-6 text-center">
        <span className="inline-block px-4 py-2 bg-white bg-opacity-20 rounded-full text-sm font-semibold animate-pulse">
          Explorar →
        </span>
      </div>
    </div>
  );
};

export default CardSection;
