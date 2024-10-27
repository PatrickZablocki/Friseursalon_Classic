// src/App.js
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Services from './components/Services/Services';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/services" element={<Services />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;


