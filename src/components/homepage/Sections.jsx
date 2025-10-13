import React from 'react';
import { useNavigate } from 'react-router-dom';
import CardSection from './CardSection';

const Sections = () => {
  const navigate = useNavigate();
  
  const dataStructures = [
    {
      id: 'linked-list',
      title: 'Lista enlazada',
      description: 'Secuencia de nodos unidos por enlaces. Permite insertar y eliminar sin mover el resto de elementos..',
      color: 'blue',
      icon: '🔗',
      delay: 500
    },
    {
      id: 'stack',
      title: 'Pila (Stack)',
      description: 'Colección donde solo interactúas con el elemento de arriba. Útil para deshacer acciones y manejar llamadas.',
      color: 'green',
      icon: '📚',
      delay: 700
    },
    {
      id: 'queue',
      title: 'Cola (Queue)',
      description: 'Colección que atiende elementos en el orden en que llegan. Ideal para turnos y procesamiento secuencial.',
      color: 'purple',
      icon: '🚶‍♂️',
      delay: 900
    },
    {
      id: 'tree',
      title: 'Árbol (Tree)',
      description: 'Estructura jerárquica que organiza valores para ubicarlos rápido: menores a la izquierda y mayores a la derecha',
      color: 'orange',
      icon: '🌳',
      delay: 1100
    }
  ];

  const handleCardClick = (structureId) => {
    // Mapeo de IDs a rutas
    const routes = {
      'linked-list': '/linkedlist',
      'stack': '/stack',
      'queue': '/queue', 
      'tree': '/tree'
    };
    
    const route = routes[structureId];
    if (route) {
      navigate(route);
    } else {
      console.log(`Ruta no encontrada para: ${structureId}`);
    }
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
