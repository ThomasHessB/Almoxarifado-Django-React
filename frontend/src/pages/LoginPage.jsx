import React from 'react';
import { login } from '../api';
import LoginForm from '../components/LoginForm';
import { Link } from 'react-router-dom';

const LoginPage = ({ onLoginSuccess }) => {
  const handleLogin = async (username, password) => {
    try {
      const data = await login(username, password);
      localStorage.setItem('accessToken', data.access);
      onLoginSuccess();
    } catch (error) {
      alert('Login falhou. Verifique usuário e senha.');
    }
  };

  return (
    <div className="flex items-center justify-center h-full">
      <div className="card w-full max-w-sm bg-base-200 shadow-xl p-6">
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
        <LoginForm onLogin={handleLogin}/>
        <div className="mt-4 text-center">
          <Link to="/register" className="link link-primary">Não possui conta? Registre-se</Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
