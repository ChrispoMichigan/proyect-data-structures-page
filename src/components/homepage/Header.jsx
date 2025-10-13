// src/components/layout/Header.jsx
import React from "react";

const Header = () => {
  return (
    <header className="relative overflow-hidden">
      {/*  */}
      <div className="relative py-12 md:py-16 bg-gradient-to-r from-rose-200 via-sky-200 to-indigo-200">
        {/* */}
        <div className="pointer-events-none absolute -top-16 -left-20 w-72 h-72 rounded-full bg-rose-300/40 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-16 -right-20 w-80 h-80 rounded-full bg-sky-300/40 blur-3xl" />

        {/* contenido centrado */}
        <div className="relative container mx-auto px-4">
          {/* tarjeta  */}
          <div className="mx-auto max-w-3xl rounded-3xl border border-white/40 bg-white/50 backdrop-blur-md shadow-lg px-6 py-8 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-800">
              DataVizor
            </h1>
            <p className="mt-3 md:mt-4 text-lg md:text-xl text-slate-700/90">
              Visualiza estructuras de datos para aprender
            </p>

            {/* Línea decorativa (pastel) */}
            <div className="mx-auto mt-6 h-1.5 w-24 rounded-full bg-gradient-to-r from-rose-400 via-sky-400 to-indigo-400" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

