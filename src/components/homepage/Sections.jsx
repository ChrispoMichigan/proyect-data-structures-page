import React from 'react';
import CardSection from './CardSection';

const Sections = () => {
  const dataStructures = [
    {
      id: 'linked-list',
      title: 'Lista enlazada',
      description: 'Conjunto de nodos donde cada uno apunta al siguiente. Ideal para inserciones rápidas.',
      color: 'blue',
      icon: '🔗',
      delay: 100
    },
    {
      id: 'stack',
      title: 'Pila (Stack)',
      description: 'Estructura LIFO (último en entrar, primero en salir).',
      color: 'green',
      icon: '📚',
      delay: 200
    },
    {
      id: 'queue',
      title: 'Cola (Queue)',
      description: 'Estructura FIFO (primero en entrar, primero en salir).',
      color: 'purple',
      icon: '🚶‍♂️',
      delay: 300
    },
    {
      id: 'tree',
      title: 'Árbol (Tree)',
      description: 'Estructura jerárquica. Ej: árbol binario de búsqueda para ordenar datos.',
      color: 'orange',
      icon: '🌳',
      delay: 400
    }
  ];

  const handleCardClick = (structureId) => {
    console.log(`Navegando a: ${structureId}`);
    // Aquí se manejará la navegación en el futuro
  };

  return (
    <section className="py-16 px-4 bg-gray-50 animate-fade-in">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4 animate-slide-in-down">
            Estructuras de Datos
          </h2>
          <p className="text-xl text-gray-600 animate-fade-in animate-delay-300">
            Selecciona una estructura para comenzar
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {dataStructures.map((structure) => (
            <CardSection
              key={structure.id}
              title={structure.title}
              description={structure.description}
              color={structure.color}
              icon={structure.icon}
              delay={structure.delay}
              onClick={() => handleCardClick(structure.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sections;
