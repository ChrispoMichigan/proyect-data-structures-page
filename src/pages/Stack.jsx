// src/pages/Stack.jsx
import React from "react";
import StackView from "../components/stack/StackView.jsx";

const Stack = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-green-800 mb-4 animate-fade-down">
            Pila (Stack)
          </h1>
          <p className="text-xl text-green-600 animate-fade-in animate-delay-300">
            Estructura LIFO (último en entrar, primero en salir)
          </p>
        </div>

        <div className="rounded-3xl bg-white/60 backdrop-blur-md border border-white/40 shadow-lg p-8 animate-fade-in-up">
          <StackView />
          <div className="mt-8 text-center">
            <button
              onClick={() => window.history.back()}
              className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg font-semibold transition-colors duration-300 animate-bounce-in"
            >
              ← Volver al inicio
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stack;
