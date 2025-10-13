import React from 'react';

const CardSection = ({ title, description, color = 'rose', icon, onClick, delay = 0 }) => {
  
  const pastelGradients = {
    rose:     'from-rose-200 to-rose-300 hover:from-rose-300 hover:to-rose-400',
    sky:      'from-sky-200 to-sky-300 hover:from-sky-300 hover:to-sky-400',
    mint:     'from-emerald-200 to-teal-200 hover:from-emerald-300 hover:to-teal-300',
    lavender: 'from-violet-200 to-indigo-200 hover:from-violet-300 hover:to-indigo-300',
    peach:    'from-amber-200 to-orange-200 hover:from-amber-300 hover:to-orange-300',
  };

  const legacyToPastel = {
    blue: 'sky',
    green: 'mint',
    purple: 'lavender',
    orange: 'peach',
  };

  const resolvedColor = pastelGradients[color] || pastelGradients[legacyToPastel[color]] || pastelGradients.rose;

  
  const iconAccents = {
    rose: 'text-rose-700/70',
    sky: 'text-sky-700/70',
    mint: 'text-teal-700/70',
    lavender: 'text-violet-700/70',
    peach: 'text-orange-700/70',
  };

  const iconClass =
    iconAccents[color] ||
    iconAccents[legacyToPastel[color]] ||
    iconAccents.rose;

  return (
    <div
      className={[
        'bg-gradient-to-br', resolvedColor,
        
        'rounded-2xl shadow-lg p-6 cursor-pointer',
        'transform transition-all duration-300 hover:scale-105 hover:shadow-xl',
        'animate-fade-in-up',
        
        'border border-white/40 backdrop-blur-[2px] bg-opacity-90'
      ].join(' ')}
      style={{ animationDelay: `${delay}ms` }}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onClick?.(); }}
      aria-label={title}
    >
      <div className="text-center">
        <div className={`text-6xl mb-4 ${iconClass} animate-bounce-in`}>
          {icon}
        </div>

        <h3 className="text-2xl font-bold mb-3 text-slate-800 animate-slide-in-left">
          {title}
        </h3>

        <p className="text-lg leading-relaxed text-slate-700/90 animate-slide-in-right">
          {description}
        </p>
      </div>

      <div className="mt-6 text-center">
        <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold
                         bg-white/60 text-slate-700 border border-white/70 shadow-sm
                         transition">
          Explorar →
        </span>
      </div>
    </div>
  );
};

export default CardSection;

