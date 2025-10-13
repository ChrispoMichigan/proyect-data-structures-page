import React from 'react';

const GithubDescription = () => {
  return (
    <section className="py-12 px-4 bg-gradient-to-r from-rose-50 via-sky-50 to-indigo-50 animate-fade-in">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          {/* Tarjeta principal */}
          <div className="rounded-3xl border border-white/60 bg-white/70 backdrop-blur-md shadow-xl p-8 animate-fade-in-up">
            
            {/* Título de la sección */}
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4 animate-slide-in-down">
                🚀 Proyecto Open Source
              </h2>
              <div className="mx-auto h-1 w-20 rounded-full bg-gradient-to-r from-rose-400 via-sky-400 to-indigo-400 animate-fade-in animate-delay-300"></div>
            </div>

            {/* Contenido principal */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              
              {/* Lado izquierdo - Información */}
              <div className="space-y-6 animate-slide-in-left">
                <div className="text-center lg:text-left">
                  <h3 className="text-2xl font-semibold text-slate-800 mb-3">
                    Proyecto de visualización de tipos de datos abstractos
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    Una aplicación interactiva para aprender y visualizar estructuras de datos 
                    de forma dinámica y educativa.
                  </p>
                </div>

                {/* Información del repositorio */}
                <div className="bg-slate-50/80 rounded-2xl p-6 border border-slate-200/50">
                  <h4 className="font-semibold text-slate-800 mb-3 flex items-center">
                    Repositorio
                  </h4>
                  {/* Call to action */}
                    <div className="mt-8 text-center animate-bounce-in animate-delay-600">
                    <a 
                        href="https://github.com/ChrispoMichigan/proyect-data-structures-page"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-slate-800 to-slate-700 text-white font-semibold rounded-2xl hover:from-slate-700 hover:to-slate-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                    >
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                        </svg>
                        Ver en GitHub
                    </a>
                    </div>
                </div>

                {/* Colaboradores */}
                <div className="bg-slate-50/80 rounded-2xl p-6 border border-slate-200/50">
                  <h4 className="font-semibold text-slate-800 mb-4 flex items-center">
                    Colaboradores
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                        A
                      </div>
                      <a 
                        href="https://github.com/ar1ann44"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-700 underline underline-offset-4 transition-colors duration-300"
                      >
                        @ar1ann44
                      </a>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                        C
                      </div>
                      <a 
                        href="https://github.com/ChrispoMichigan"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-700 underline underline-offset-4 transition-colors duration-300"
                      >
                        @ChrispoMichigan
                      </a>
                    </div>
                  </div>
                </div>

                {/* Tecnologías usadas */}
                <div className="bg-slate-50/80 rounded-2xl p-6 border border-slate-200/50">
                  <h4 className="font-semibold text-slate-800 mb-4 flex items-center">
                    Tecnologías usadas
                  </h4>
                  <div className="flex flex-wrap gap-4">
                    {/* React */}
                    <div className="flex items-center space-x-3 bg-white/60 rounded-xl p-3 border border-slate-200/40 hover:scale-105 transition-transform duration-300">
                      <div className="w-8 h-8 flex items-center justify-center">
                        <img 
                          src="/react-icon.png" 
                          alt="React Icon" 
                          className="w-full h-full object-contain aspect-square"
                        />
                      </div>
                      <span className="font-medium text-slate-700">React</span>
                    </div>

                    {/* JavaScript */}
                    <div className="flex items-center space-x-3 bg-white/60 rounded-xl p-3 border border-slate-200/40 hover:scale-105 transition-transform duration-300">
                      <div className="w-8 h-8 flex items-center justify-center">
                        <img 
                          src="/js-icon.png" 
                          alt="JavaScript Icon" 
                          className="w-full h-full object-contain aspect-square"
                        />
                      </div>
                      <span className="font-medium text-slate-700">JavaScript</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Lado derecho - Icono de GitHub */}
              <div className="flex justify-center lg:justify-end animate-slide-in-right animate-delay-300">
                <div className="relative group">
                  {/* Efecto de resplandor */}
                  <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-rose-300/30 via-sky-300/30 to-indigo-300/30 blur-xl opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
                  
                  {/* Contenedor del icono */}
                  <div className="relative bg-white/80 backdrop-blur-sm rounded-full p-8 border border-white/60 shadow-2xl group-hover:scale-105 transition-transform duration-300 flex items-center justify-center">
                    <div className="w-32 h-32 md:w-40 md:h-40 flex items-center justify-center">
                      <img 
                        src="/github-icon.png" 
                        alt="GitHub Icon" 
                        className="w-full h-full object-contain aspect-square opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                      />
                    </div>
                  </div>
                  
                  {/* Partículas decorativas */}
                  <div className="absolute top-4 right-4 w-3 h-3 bg-yellow-400 rounded-full animate-ping opacity-60"></div>
                  <div className="absolute bottom-8 left-2 w-2 h-2 bg-blue-400 rounded-full animate-pulse opacity-70"></div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default GithubDescription;
