import React, { useState } from 'react';

const LoginForm = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(username, password);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="form-control">
        <label className="label font-semibold">Usuário:</label>
        <input 
          className="input input-bordered w-full" 
          value={username} 
          onChange={e => setUsername(e.target.value)} 
          required 
        />
      </div>
      <div className="form-control">
        <label className="label font-semibold">Senha:</label>
        <input 
          className="input input-bordered w-full" 
          type="password" 
          value={password} 
          onChange={e => setPassword(e.target.value)} 
          required
        />
      </div>
      <button className="btn btn-primary w-full mt-4" type="submit">Entrar</button>
    </form>
  );
};

export default LoginForm;
