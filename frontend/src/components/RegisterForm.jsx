import React, { useState } from 'react';

const RegisterForm = ({ onRegister }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [contato, setContato] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister(username, password, email, contato);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="form-control">
        <label className="label font-semibold">Usuário:</label>
        <input 
          className="input input-bordered" 
          value={username} 
          onChange={e => setUsername(e.target.value)} 
          required
        />
      </div>
      <div className="form-control">
        <label className="label font-semibold">Email:</label>
        <input 
          type="email"
          className="input input-bordered" 
          value={email} 
          onChange={e => setEmail(e.target.value)} 
          required
        />
      </div>
      <div className="form-control">
        <label className="label font-semibold">Contato:</label>
        <input 
          className="input input-bordered" 
          value={contato} 
          onChange={e => setContato(e.target.value)} 
          required
        />
      </div>
      <div className="form-control">
        <label className="label font-semibold">Senha:</label>
        <input 
          className="input input-bordered" 
          type="password" 
          value={password} 
          onChange={e => setPassword(e.target.value)} 
          placeholder="Mínimo 8 caracteres"
          required
        />
      </div>
      <button className="btn btn-primary mt-4 w-full" type="submit">Registrar</button>
    </form>
  );
};

export default RegisterForm;
