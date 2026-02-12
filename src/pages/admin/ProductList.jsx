import React from 'react';
import { Link } from 'react-router-dom';
import { Plus, Search, Edit2, Trash2, AlertTriangle } from 'lucide-react';

// Dados simulados para o Admin
const adminProducts = [
  { id: 1, sku: "WHEY-ISO-900", name: "Whey Protein Isolate", stock: 45, price: 149.90, expiration: "15/10/2025" },
  { id: 2, sku: "PRE-PSY-300", name: "Pré-Treino Psychotic", stock: 4, price: 89.90, expiration: "10/05/2024" }, // Estoque baixo e validade próxima
  { id: 3, sku: "CRE-MONO-300", name: "Creatina Monohidratada", stock: 120, price: 64.90, expiration: "20/12/2026" },
];

export default function ProductList() {
  return (
    <div className="max-w-6xl mx-auto">
      {/* Cabeçalho da Página */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white mb-1">Produtos</h1>
          <p className="text-slate-400 text-sm">Gerencie o seu catálogo e estoque.</p>
        </div>
        
        {/* Botão de Adicionar */}
        <Link to="/admin/produtos/novo" className="bg-brand-neon text-black font-bold px-4 py-2 rounded-lg hover:bg-green-400 transition-colors flex items-center gap-2 shadow-lg">
        <Plus size={20} /> NOVO PRODUTO
        </Link>
      </div>

      {/* Barra de Ferramentas (Busca e Filtros) */}
      <div className="bg-surface p-4 rounded-t-xl border border-slate-700 flex gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-2.5 text-slate-500" size={18} />
          <input 
            type="text" 
            placeholder="Buscar por nome ou SKU..." 
            className="w-full bg-background border border-slate-700 text-white px-4 py-2 pl-10 rounded-lg focus:outline-none focus:border-brand-neon"
          />
        </div>
      </div>

      {/* Tabela de Produtos */}
      <div className="bg-surface border-x border-b border-slate-700 rounded-b-xl overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-800/50 text-slate-400 text-sm uppercase tracking-wider">
              <th className="p-4 font-medium">Produto</th>
              <th className="p-4 font-medium">SKU</th>
              <th className="p-4 font-medium">Estoque</th>
              <th className="p-4 font-medium">Validade</th>
              <th className="p-4 font-medium">Preço</th>
              <th className="p-4 font-medium text-right">Ações</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800">
            {adminProducts.map((prod) => (
              <tr key={prod.id} className="hover:bg-slate-800/30 transition-colors">
                <td className="p-4 font-medium text-white">{prod.name}</td>
                <td className="p-4 text-slate-400 text-sm">{prod.sku}</td>
                <td className="p-4">
                  {prod.stock < 5 ? (
                    <span className="bg-red-500/10 text-red-500 px-2 py-1 rounded-md text-xs font-bold flex items-center gap-1 w-max">
                      <AlertTriangle size={12} /> {prod.stock} un
                    </span>
                  ) : (
                    <span className="text-slate-300">{prod.stock} un</span>
                  )}
                </td>
                <td className="p-4 text-slate-300">{prod.expiration}</td>
                <td className="p-4 text-brand-neon font-bold">R$ {prod.price.toFixed(2)}</td>
                <td className="p-4 flex justify-end gap-2">
                  <button className="p-2 text-slate-400 hover:text-white bg-slate-800 rounded-md transition-colors"><Edit2 size={16} /></button>
                  <button className="p-2 text-slate-400 hover:text-red-500 bg-slate-800 rounded-md transition-colors"><Trash2 size={16} /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}