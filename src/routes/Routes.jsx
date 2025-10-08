import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* Aquí se agregarán más rutas para cada estructura de datos */}
      </Routes>
    </Router>
  );
};

export default AppRoutes;
