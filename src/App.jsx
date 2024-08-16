import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/home';
import About from './pages/about';
import Blog from './pages/blog';
import Speaking from './pages/speaking';
import Code from './pages/code';

export default function App() {

  // https://ui.dev/react-router-url-parameters

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/speaking" element={<Speaking />} />
      <Route path="/code" element={<Code />} />
    </Routes>
  );
}