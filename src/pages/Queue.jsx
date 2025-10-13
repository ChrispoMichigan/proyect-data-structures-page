// src/pages/Queue.jsx
import React from "react";
import QueueView from "../components/queue/QueueView.jsx";

const Queue = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-purple-100">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-purple-800 mb-4 animate-fade-down">
            Cola (Queue)
          </h1>
          <p className="text-xl text-purple-600 animate-fade-in animate-delay-300">
            Estructura FIFO (primero en entrar, primero en salir)
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-xl p-8 animate-fade-in-up">
          <QueueView />
          <div className="mt-8 text-center">
            <button
              onClick={() => window.history.back()}
              className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-lg font-semibold transition-colors duration-300 animate-bounce-in"
            >
              ← Volver al inicio
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Queue;
