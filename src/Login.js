// src/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importando useNavigate
import './Login.css'; // Importando o CSS específico para a página de login

function Login() {
  const [username, setUsername] = useState('admin');
  const [password, setPassword] = useState('admin');
  const navigate = useNavigate(); // Inicializando useNavigate

  const handleSubmit = (e) => {
    e.preventDefault(); // Previne o comportamento padrão do formulário
    // Aqui você pode adicionar a lógica de autenticação
    if (username === 'admin' && password === 'admin') {
      navigate('/servicos'); // Redirecionando para a página de serviços
    } else {
      alert('Credenciais inválidas. Tente novamente.'); // Mensagem de erro
    }
  };

  return (
    <div className="Login">
      <header className="Login-header">
        <div className="form-container">
          <h1>Página de Autenticação</h1>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="username">Usuário:</label>
              <input 
                type="text" 
                id="username" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
                placeholder="Digite seu usuário" 
                required 
              />
            </div>
            <div className="input-group">
              <label htmlFor="password">Senha:</label>
              <input 
                type="password" 
                id="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                placeholder="Digite sua senha" 
                required 
              />
            </div>
            <button type="submit" className="button">Entrar</button>
          </form>
        </div>
      </header>
    </div>
  );
}

export default Login;
