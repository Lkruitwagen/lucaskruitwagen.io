import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/home';
import About from './pages/about';
import Blog from './pages/blog';

export default function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/blog" element={<Blog />} />
    </Routes>
  );
}