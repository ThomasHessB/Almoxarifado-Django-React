import React, { useEffect, useState } from 'react';

const ProductForm = ({ onSubmit, produtoEdit }) => {
  const [nome, setNome] = useState('');
  const [codigo, setCodigo] = useState('');
  const [preco, setPreco] = useState('');

  useEffect(() => {
    if (produtoEdit) {
      setNome(produtoEdit.nome);
      setCodigo(produtoEdit.codigo);
      setPreco(produtoEdit.preco);
    } else {
      setNome('');
      setCodigo('');
      setPreco('');
    }
  }, [produtoEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ nome, codigo, preco });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="form-control">
        <label className="label font-semibold">Nome:</label>
        <input 
          className="input input-bordered" 
          value={nome} 
          onChange={e => setNome(e.target.value)} 
          required
        />
      </div>
      <div className="form-control">
        <label className="label font-semibold">Código:</label>
        <input 
          className="input input-bordered" 
          value={codigo} 
          onChange={e => setCodigo(e.target.value)} 
          required
        />
      </div>
      <div className="form-control">
        <label className="label font-semibold">Preço:</label>
        <input 
          className="input input-bordered" 
          type="number" 
          step="0.01" 
          value={preco} 
          onChange={e => setPreco(e.target.value)} 
          required
        />
      </div>
      <button className="btn btn-success mt-4">{produtoEdit ? "Atualizar" : "Cadastrar"}</button>
    </form>
  );
};

export default ProductForm;
