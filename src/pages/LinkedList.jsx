import React, { useState, useCallback } from 'react';
import Options from '../components/linked-list/Options';
import LinkedListData from '../components/linked-list/LinkedListData';

const LinkedList = () => {
  const [nodes, setNodes] = useState([]);
  const [isAnimating, setIsAnimating] = useState(false);
  const [highlightedNode, setHighlightedNode] = useState(null);
  const [insertingNode, setInsertingNode] = useState(null);
  const [deletingNode, setDeletingNode] = useState(null);
  const [searchingNode, setSearchingNode] = useState(null);
  const [message, setMessage] = useState('');

  // Función para mostrar mensajes temporales
  const showMessage = (msg, duration = 3000) => {
    setMessage(msg);
    setTimeout(() => setMessage(''), duration);
  };

  // Función para animar operaciones
  const animateOperation = async (operation, duration = 1000) => {
    setIsAnimating(true);
    await new Promise(resolve => setTimeout(resolve, duration));
    setIsAnimating(false);
  };

  // Insertar al inicio
  const insertAtBeginning = useCallback(async (value) => {
    setInsertingNode(0);
    showMessage(`Insertando "${value}" al inicio de la lista`);
    
    await animateOperation('insert');
    
    setNodes(prevNodes => [{ value }, ...prevNodes]);
    setInsertingNode(null);
    showMessage(`"${value}" insertado exitosamente al inicio`);
  }, []);

  // Insertar al final
  const insertAtEnd = useCallback(async (value) => {
    const newIndex = nodes.length;
    setInsertingNode(newIndex);
    showMessage(`Insertando "${value}" al final de la lista`);
    
    await animateOperation('insert');
    
    setNodes(prevNodes => [...prevNodes, { value }]);
    setInsertingNode(null);
    showMessage(`"${value}" insertado exitosamente al final`);
  }, [nodes.length]);

  // Insertar en posición específica
  const insertAtPosition = useCallback(async (value, position) => {
    if (position < 0 || position > nodes.length) {
      showMessage(`Posición ${position} inválida. Debe estar entre 0 y ${nodes.length}`);
      return;
    }
    
    setInsertingNode(position);
    showMessage(`Insertando "${value}" en la posición ${position}`);
    
    await animateOperation('insert');
    
    setNodes(prevNodes => {
      const newNodes = [...prevNodes];
      newNodes.splice(position, 0, { value });
      return newNodes;
    });
    setInsertingNode(null);
    showMessage(`"${value}" insertado exitosamente en la posición ${position}`);
  }, [nodes.length]);

  // Eliminar nodo
  const deleteNode = useCallback(async (value) => {
    const index = nodes.findIndex(node => node.value === value);
    
    if (index === -1) {
      showMessage(`El valor "${value}" no se encontró en la lista`);
      return;
    }
    
    setDeletingNode(index);
    showMessage(`Eliminando "${value}" de la lista`);
    
    await animateOperation('delete');
    
    setNodes(prevNodes => prevNodes.filter((_, i) => i !== index));
    setDeletingNode(null);
    showMessage(`"${value}" eliminado exitosamente de la lista`);
  }, [nodes]);

  // Buscar nodo
  const searchNode = useCallback(async (value) => {
    setSearchingNode(null);
    showMessage(`Buscando "${value}" en la lista...`);
    
    for (let i = 0; i < nodes.length; i++) {
      setSearchingNode(i);
      await new Promise(resolve => setTimeout(resolve, 500));
      
      if (nodes[i].value === value) {
        setSearchingNode(null);
        setHighlightedNode(i);
        showMessage(`¡"${value}" encontrado en la posición ${i}!`);
        
        // Quitar highlight después de 3 segundos
        setTimeout(() => setHighlightedNode(null), 3000);
        return;
      }
    }
    
    setSearchingNode(null);
    showMessage(`"${value}" no se encontró en la lista`);
  }, [nodes]);

  // Limpiar lista
  const clearList = useCallback(() => {
    if (nodes.length === 0) {
      showMessage('La lista ya está vacía');
      return;
    }
    
    setNodes([]);
    setHighlightedNode(null);
    setInsertingNode(null);
    setDeletingNode(null);
    setSearchingNode(null);
    showMessage('Lista limpiada exitosamente');
  }, [nodes.length]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-blue-800 mb-4 animate-fade-down">
            🔗 Lista Enlazada Interactiva
          </h1>
          <p className="text-xl text-blue-600 animate-fade-in animate-delay-300">
            Explora y manipula una lista enlazada en tiempo real
          </p>
        </div>

        {/* Componente de opciones */}
        <Options
          onInsertAtBeginning={insertAtBeginning}
          onInsertAtEnd={insertAtEnd}
          onInsertAtPosition={insertAtPosition}
          onDeleteNode={deleteNode}
          onSearchNode={searchNode}
          onClearList={clearList}
          isAnimating={isAnimating}
        />

        {/* Componente de visualización */}
        <LinkedListData
          nodes={nodes}
          highlightedNode={highlightedNode}
          insertingNode={insertingNode}
          deletingNode={deletingNode}
          searchingNode={searchingNode}
          message={message}
        />

        {/* Botón de regreso */}
        <div className="mt-8 text-center">
          <button 
            onClick={() => window.history.back()}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300 animate-bounce-in shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            ← Volver al inicio
          </button>
        </div>
      </div>
    </div>
  );
};

export default LinkedList;