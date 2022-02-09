import React from 'react'
import './App.css';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProjectForm from './components/ProjectForm';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/addcustomer" exact element={<ProjectForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
