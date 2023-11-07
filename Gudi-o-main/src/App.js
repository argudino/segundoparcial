import React, { useState } from 'react';
import './App.css';
import Login from './Login';
import Registro from './Registro';

function App() {
  const [showLogin, setShowLogin] = useState(true);

  const toggleForm = () => {
    setShowLogin(!showLogin);
  };

  return (
    <div className="App">
      {showLogin ? (
        <Login toggleForm={toggleForm} />
      ) : (
        <Registro toggleForm={toggleForm} />
      )}
    </div>
  );
}

export default App;
