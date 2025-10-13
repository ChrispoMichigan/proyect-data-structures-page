// src/pages/Tree.jsx
import React from "react";
import BSTView from "../components/tree/BSTView.jsx";

const Tree = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-orange-800 mb-4 animate-fade-down">
            Árbol (Tree)
          </h1>
          <p className="text-xl text-orange-600 animate-fade-in animate-delay-300">
            Estructura jerárquica para organizar datos
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-xl p-8 animate-fade-in-up">
          <BSTView />
          <div className="mt-8 text-center">
            <button
              onClick={() => window.history.back()}
              className="bg-orange-600 hover:bg-orange-700 text-white px-5 py-2 rounded-lg font-semibold transition-colors duration-300 animate-bounce-in"
            >
              ← Volver al inicio
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tree;
