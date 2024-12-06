import React from 'react';

const ProductList = ({ produtos, onEdit, onDelete }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Código</th>
            <th>Preço</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {produtos.map(prod => (
            <tr key={prod.id}>
              <td>{prod.id}</td>
              <td>{prod.nome}</td>
              <td>{prod.codigo}</td>
              <td>{parseFloat(prod.preco).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</td>
              <td className="flex gap-2">
                <button className="btn btn-sm btn-info" onClick={() => onEdit(prod)}>Editar</button>
                <button className="btn btn-sm btn-error" onClick={() => onDelete(prod.id)}>Excluir</button>
              </td>
            </tr>
          ))}
          {produtos.length === 0 && (
            <tr>
              <td colSpan="5" className="text-center">Nenhum produto encontrado.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
