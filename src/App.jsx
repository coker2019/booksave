import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Categories from './pages/categories';
import Home from './pages/Home';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">

      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Categories" element={<Categories />} />
      </Routes>

    </div>
  );
}

export default App;
