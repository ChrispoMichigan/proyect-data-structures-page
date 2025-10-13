import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-rose-100 via-sky-100 to-indigo-100 text-slate-700 py-8 px-4 animate-fade-up border-t border-white/60">
      <div className="container mx-auto text-center">
        <p className="text-lg mb-2 font-semibold">© 2025 DataVizor</p>
        <p className="text-slate-600">Visualiza estructuras de datos para aprender</p>
        <p className="text-sm mt-4">
          <span className="font-medium">Contacto: </span>
          <a href="mailto:christian.castillo@uabc.edu.mx" className="underline underline-offset-4 hover:opacity-80">
            christian.castillo@uabc.edu.mx
          </a>
          <span className="mx-2">·</span>
          <a href="mailto:osuna.jenifer@uabc.edu.mx" className="underline underline-offset-4 hover:opacity-80">
            osuna.jenifer@uabc.edu.mx
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

