import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import LinkedList from '../pages/LinkedList';
import Stack from '../pages/Stack';
import Queue from '../pages/Queue';
import Tree from '../pages/Tree';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/linkedlist" element={<LinkedList />} />
        <Route path="/stack" element={<Stack />} />
        <Route path="/queue" element={<Queue />} />
        <Route path="/tree" element={<Tree />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
