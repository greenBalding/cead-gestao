// src/App.js
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importando useNavigate
import './App.css';

function App() {
  const navigate = useNavigate(); // Inicializando useNavigate

  const handleLogin = () => {
    navigate('/login'); // Navegando para a página de login
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Bem-vindo ao CEAD Gestão!</h1>
        <button className="button" onClick={handleLogin}>Ir para Login</button> {/* Botão diretamente aqui */}
      </header>
    </div>
  );
}

export default App;