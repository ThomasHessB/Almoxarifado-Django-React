import React, { useEffect, useState } from 'react';
import { getProdutos, createProduto, updateProduto, deleteProduto } from '../api';
import ProductList from '../components/ProductList';
import ProductForm from '../components/ProductForm';

const ProductPage = () => {
  const [produtos, setProdutos] = useState([]);
  const [produtoEdit, setProdutoEdit] = useState(null);
  
  const token = localStorage.getItem('accessToken');

  const loadProdutos = async () => {
    try {
      const data = await getProdutos(token);
      setProdutos(data);
    } catch (error) {
      console.error("Erro ao carregar produtos", error);
    }
  };

  useEffect(() => {
    loadProdutos();
  }, []);

  const handleSubmit = async (prod) => {
    try {
      if (produtoEdit) {
        await updateProduto(token, produtoEdit.id, prod);
      } else {
        await createProduto(token, prod);
      }
      setProdutoEdit(null);
      loadProdutos();
    } catch (error) {
      alert("Erro ao salvar produto");
    }
  };

  const handleEdit = (prod) => {
    setProdutoEdit(prod);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Deseja realmente excluir este produto?")) {
      await deleteProduto(token, id);
      loadProdutos();
    }
  };

  return (
    <div className="flex flex-col gap-8">
      <h2 className="text-3xl font-bold">Gestão de Produtos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-4 bg-base-200 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4">{produtoEdit ? "Editar Produto" : "Novo Produto"}</h3>
          <ProductForm onSubmit={handleSubmit} produtoEdit={produtoEdit}/>
        </div>
        <div className="p-4 bg-base-200 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Lista de Produtos</h3>
          <ProductList produtos={produtos} onEdit={handleEdit} onDelete={handleDelete}/>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
