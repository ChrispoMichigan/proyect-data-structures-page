import React, { useState, useEffect } from 'react';

const LinkedListData = ({ 
  nodes, 
  highlightedNode, 
  insertingNode, 
  deletingNode, 
  searchingNode,
  message 
}) => {
  const [animatingNodes, setAnimatingNodes] = useState(new Set());

  useEffect(() => {
    if (insertingNode !== null) {
      setAnimatingNodes(prev => new Set([...prev, insertingNode]));
      const timer = setTimeout(() => {
        setAnimatingNodes(prev => {
          const newSet = new Set(prev);
          newSet.delete(insertingNode);
          return newSet;
        });
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [insertingNode]);

  const Node = ({ value, index, isHighlighted, isInserting, isDeleting, isSearching }) => {
    const getNodeClasses = () => {
      let baseClasses = "relative flex items-center justify-center w-16 h-16 rounded-full border-4 text-white font-bold text-lg transition-all duration-500 transform";
      
      if (isDeleting) {
        return `${baseClasses} bg-red-500 border-red-600 animate-ping scale-75 opacity-50`;
      }
      
      if (isInserting || animatingNodes.has(index)) {
        return `${baseClasses} bg-green-500 border-green-600 animate-bounce scale-110 shadow-lg shadow-green-300`;
      }
      
      if (isSearching) {
        return `${baseClasses} bg-yellow-500 border-yellow-600 animate-pulse scale-110 shadow-lg shadow-yellow-300`;
      }
      
      if (isHighlighted) {
        return `${baseClasses} bg-purple-500 border-purple-600 animate-pulse scale-105 shadow-lg shadow-purple-300`;
      }
      
      return `${baseClasses} bg-blue-500 border-blue-600 hover:bg-blue-600 hover:scale-105 shadow-lg hover:shadow-blue-300`;
    };

    return (
      <div className="flex items-center animate-fade-in" style={{animationDelay: `${index * 100}ms`}}>
        <div className={getNodeClasses()}>
          <span className="relative z-10">{value}</span>
          
          {/* Efectos visuales adicionales */}
          {isInserting && (
            <div className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-75"></div>
          )}
          
          {isSearching && (
            <div className="absolute inset-0 rounded-full bg-yellow-400 animate-spin opacity-30"></div>
          )}
          
          {/* Indicador de posición */}
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-gray-600 font-semibold">
            {index === 0 ? 'HEAD' : index}
          </div>
        </div>
        
        {/* Flecha animada */}
        {index < nodes.length - 1 && (
          <div className="flex items-center mx-4 animate-slide-in-right" style={{animationDelay: `${index * 100 + 50}ms`}}>
            <div className="w-8 h-1 bg-gray-400 relative">
              <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-gray-400 border-t-2 border-b-2 border-t-transparent border-b-transparent"></div>
              
              {/* Animación de flujo */}
              <div className="absolute top-0 left-0 w-2 h-1 bg-blue-300 animate-pulse opacity-60"></div>
            </div>
          </div>
        )}
        
        {/* Indicador de final */}
        {index === nodes.length - 1 && (
          <div className="ml-4 flex items-center animate-fade-in animate-delay-500">
            <div className="w-8 h-1 bg-gray-300"></div>
            <div className="w-6 h-6 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 text-xs font-bold">
              ∅
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="bg-white rounded-lg shadow-xl p-8 animate-fade-in-up">
      {/* Título de la visualización */}
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-2 animate-slide-in-down">
          Visualización de la Lista Enlazada
        </h3>
        <div className="text-sm text-gray-600 animate-fade-in animate-delay-300">
          <span className="font-semibold">Nodos: {nodes.length}</span>
          {nodes.length > 0 && (
            <span className="ml-4">
              HEAD → {nodes.map(node => node.value).join(' → ')} → NULL
            </span>
          )}
        </div>
      </div>

      {/* Área de visualización */}
      <div className="min-h-32 flex items-center justify-center p-8 bg-gray-50 rounded-lg overflow-x-auto">
        {nodes.length === 0 ? (
          <div className="text-center animate-bounce-in">
            <p className="text-gray-500 text-lg">La lista está vacía</p>
            <p className="text-gray-400 text-sm">Agrega algunos nodos para comenzar</p>
          </div>
        ) : (
          <div className="flex items-center flex-nowrap">
            {nodes.map((node, index) => (
              <Node
                key={`${node.value}-${index}`}
                value={node.value}
                index={index}
                isHighlighted={highlightedNode === index}
                isInserting={insertingNode === index}
                isDeleting={deletingNode === index}
                isSearching={searchingNode === index}
              />
            ))}
          </div>
        )}
      </div>

      {/* Mensaje de estado */}
      {message && (
        <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg animate-fade-in">
          <div className="flex items-center">
            <div className="text-blue-500 mr-3">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
            </div>
            <p className="text-blue-800 font-medium">{message}</p>
          </div>
        </div>
      )}

      {/* Estadísticas animadas */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-4 rounded-lg text-center animate-slide-in-left">
          <div className="text-2xl font-bold">{nodes.length}</div>
          <div className="text-sm opacity-90">Nodos Total</div>
        </div>
        
        <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-4 rounded-lg text-center animate-slide-in-up animate-delay-200">
          <div className="text-2xl font-bold">O(1)</div>
          <div className="text-sm opacity-90">Inserción Inicio</div>
        </div>
        
        <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white p-4 rounded-lg text-center animate-slide-in-right animate-delay-400">
          <div className="text-2xl font-bold">O(n)</div>
          <div className="text-sm opacity-90">Búsqueda</div>
        </div>
      </div>

      {/* Leyenda de colores */}
      <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm">
        <div className="flex items-center animate-fade-in animate-delay-600">
          <div className="w-4 h-4 bg-blue-500 rounded-full mr-2"></div>
          <span>Nodo normal</span>
        </div>
        <div className="flex items-center animate-fade-in animate-delay-700">
          <div className="w-4 h-4 bg-green-500 rounded-full mr-2"></div>
          <span>Insertando</span>
        </div>
        <div className="flex items-center animate-fade-in animate-delay-800">
          <div className="w-4 h-4 bg-yellow-500 rounded-full mr-2"></div>
          <span>Buscando</span>
        </div>
        <div className="flex items-center animate-fade-in animate-delay-900">
          <div className="w-4 h-4 bg-red-500 rounded-full mr-2"></div>
          <span>Eliminando</span>
        </div>
        <div className="flex items-center animate-fade-in animate-delay-1000">
          <div className="w-4 h-4 bg-purple-500 rounded-full mr-2"></div>
          <span>Encontrado</span>
        </div>
      </div>
    </div>
  );
};

export default LinkedListData;