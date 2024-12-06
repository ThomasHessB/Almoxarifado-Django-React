import React from 'react';
import RegisterForm from '../components/RegisterForm';
import { registerUser } from '../api';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
  const navigate = useNavigate();

  const handleRegister = async (username, password, email, contato) => {
    try {
      await registerUser(username, password, email, contato);
      alert("Usuário criado com sucesso! Agora faça o login.");
      navigate('/login');
    } catch (error) {
        if (error.response) {
          console.log("Backend responded with:", error.response.status, error.response.data);
        } else {
          console.log("No response from backend:", error.message);
        }
        alert("Erro ao criar usuário. Verifique os dados e tente novamente.");
      }
      
  };

  return (
    <div className="flex items-center justify-center h-full">
      <div className="card w-full max-w-sm bg-base-200 shadow-xl p-6">
        <h2 className="text-2xl font-bold mb-4 text-center">Registrar Novo Usuário</h2>
        <RegisterForm onRegister={handleRegister}/>
      </div>
    </div>
  );
};

export default RegisterPage;
