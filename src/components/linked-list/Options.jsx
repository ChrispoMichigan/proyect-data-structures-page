import React, { useState } from 'react';

const Options = ({ 
  onInsertAtBeginning, 
  onInsertAtEnd, 
  onInsertAtPosition, 
  onDeleteNode, 
  onSearchNode, 
  onClearList,
  isAnimating 
}) => {
  const [inputValue, setInputValue] = useState('');
  const [position, setPosition] = useState('');
  const [searchValue, setSearchValue] = useState('');

  const handleInsertAtBeginning = () => {
    if (inputValue.trim() && !isAnimating) {
      onInsertAtBeginning(inputValue.trim());
      setInputValue('');
    }
  };

  const handleInsertAtEnd = () => {
    if (inputValue.trim() && !isAnimating) {
      onInsertAtEnd(inputValue.trim());
      setInputValue('');
    }
  };

  const handleInsertAtPosition = () => {
    if (inputValue.trim() && position && !isAnimating) {
      onInsertAtPosition(inputValue.trim(), parseInt(position));
      setInputValue('');
      setPosition('');
    }
  };

  const handleDeleteNode = () => {
    if (inputValue.trim() && !isAnimating) {
      onDeleteNode(inputValue.trim());
      setInputValue('');
    }
  };

  const handleSearchNode = () => {
    if (searchValue.trim() && !isAnimating) {
      onSearchNode(searchValue.trim());
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-xl p-6 mb-8 animate-fade-in-down">
      {/* Header */}
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold text-blue-800 mb-2 animate-slide-in-left">
          🔗 Operaciones de Lista Enlazada
        </h2>
        <p className="text-blue-600 animate-slide-in-right animate-delay-200">
          Interactúa con la estructura de datos
        </p>
      </div>

      {/* Controles principales */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        {/* Input principal */}
        <div className="space-y-2 animate-fade-in animate-delay-300">
          <label className="block text-sm font-semibold text-gray-700">
            Valor del nodo:
          </label>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
            placeholder="Ingresa un valor..."
            disabled={isAnimating}
          />
        </div>

        {/* Input de posición */}
        <div className="space-y-2 animate-fade-in animate-delay-400">
          <label className="block text-sm font-semibold text-gray-700">
            Posición (opcional):
          </label>
          <input
            type="number"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
            placeholder="0, 1, 2..."
            min="0"
            disabled={isAnimating}
          />
        </div>

        {/* Input de búsqueda */}
        <div className="space-y-2 animate-fade-in animate-delay-500">
          <label className="block text-sm font-semibold text-gray-700">
            Buscar valor:
          </label>
          <div className="flex gap-2">
            <input
              type="text"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
              placeholder="Valor a buscar..."
              disabled={isAnimating}
            />
            <button
              onClick={handleSearchNode}
              disabled={isAnimating || !searchValue.trim()}
              className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 disabled:bg-gray-400 transition-all duration-300 transform hover:scale-105"
            >
              🔍
            </button>
          </div>
        </div>
      </div>

      {/* Botones de operaciones */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
        <button
          onClick={handleInsertAtBeginning}
          disabled={isAnimating || !inputValue.trim()}
          className="px-4 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 disabled:bg-gray-400 transition-all duration-300 transform hover:scale-105 animate-bounce-in animate-delay-600"
        >
          <span className="block text-sm font-semibold">➕ Inicio</span>
          <span className="block text-xs">Insertar al inicio</span>
        </button>

        <button
          onClick={handleInsertAtEnd}
          disabled={isAnimating || !inputValue.trim()}
          className="px-4 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:bg-gray-400 transition-all duration-300 transform hover:scale-105 animate-bounce-in animate-delay-700"
        >
          <span className="block text-sm font-semibold">➕ Final</span>
          <span className="block text-xs">Insertar al final</span>
        </button>

        <button
          onClick={handleInsertAtPosition}
          disabled={isAnimating || !inputValue.trim() || !position}
          className="px-4 py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600 disabled:bg-gray-400 transition-all duration-300 transform hover:scale-105 animate-bounce-in animate-delay-800"
        >
          <span className="block text-sm font-semibold">➕ Posición</span>
          <span className="block text-xs">Insertar en pos.</span>
        </button>

        <button
          onClick={handleDeleteNode}
          disabled={isAnimating || !inputValue.trim()}
          className="px-4 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 disabled:bg-gray-400 transition-all duration-300 transform hover:scale-105 animate-bounce-in animate-delay-900"
        >
          <span className="block text-sm font-semibold">🗑️ Eliminar</span>
          <span className="block text-xs">Eliminar nodo</span>
        </button>

        <button
          onClick={onClearList}
          disabled={isAnimating}
          className="px-4 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 disabled:bg-gray-400 transition-all duration-300 transform hover:scale-105 animate-bounce-in animate-delay-1000"
        >
          <span className="block text-sm font-semibold">🧹 Limpiar</span>
          <span className="block text-xs">Vaciar lista</span>
        </button>
      </div>

      {/* Indicador de animación */}
      {isAnimating && (
        <div className="mt-4 text-center animate-pulse">
          <span className="inline-flex items-center px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">
            <svg className="animate-spin -ml-1 mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Procesando operación...
          </span>
        </div>
      )}
    </div>
  );
};

export default Options;
