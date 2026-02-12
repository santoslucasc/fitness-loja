import React, { useState } from 'react';
import { ArrowLeft, Save, Upload, Plus, Trash2, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ProductForm() {
  const [flavors, setFlavors] = useState(['Chocolate', 'Morango']);
  const [newFlavor, setNewFlavor] = useState('');

  const addFlavor = () => {
    if (newFlavor.trim() !== '') {
      setFlavors([...flavors, newFlavor]);
      setNewFlavor('');
    }
  };

  const removeFlavor = (flavorToRemove) => {
    setFlavors(flavors.filter(f => f !== flavorToRemove));
  };

  return (
    <div className="max-w-4xl mx-auto pb-12">
      {/* Cabeçalho */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-4">
          <Link to="/admin/produtos" className="p-2 bg-surface border border-slate-700 rounded-lg hover:text-brand-neon transition-colors">
            <ArrowLeft size={20} />
          </Link>
          <div>
            <h1 className="text-3xl font-bold text-white">Novo Produto</h1>
            <p className="text-slate-400 text-sm">Cadastre um novo item no seu catálogo.</p>
          </div>
        </div>
        <button className="bg-brand-neon text-black font-bold px-6 py-2 rounded-lg hover:bg-green-400 transition-colors flex items-center gap-2 shadow-lg">
          <Save size={20} /> SALVAR PRODUTO
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Coluna Principal (2/3 do espaço) */}
        <div className="md:col-span-2 space-y-6">
          
          {/* Card 1: Informações Básicas */}
          <div className="bg-surface p-6 rounded-xl border border-slate-800">
            <h2 className="text-lg font-bold text-white mb-4">Informações Básicas</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-1">Nome do Produto *</label>
                <input type="text" placeholder="Ex: Whey Protein Isolate 900g" className="w-full bg-background border border-slate-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:border-brand-neon" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-1">Categoria</label>
                  <select className="w-full bg-background border border-slate-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:border-brand-neon">
                    <option>Proteínas</option>
                    <option>Aminoácidos</option>
                    <option>Pré-Treinos</option>
                    <option>Vestuário</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-1">Marca</label>
                  <input type="text" placeholder="Ex: Max Titanium" className="w-full bg-background border border-slate-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:border-brand-neon" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-1">Descrição do Produto</label>
                <textarea rows="4" placeholder="Descreva os benefícios, ingredientes..." className="w-full bg-background border border-slate-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:border-brand-neon"></textarea>
              </div>
            </div>
          </div>

          {/* Card 2: Variações (Sabores/Tamanhos) */}
          <div className="bg-surface p-6 rounded-xl border border-slate-800">
            <h2 className="text-lg font-bold text-white mb-4">Variações (Sabores)</h2>
            <div className="flex gap-2 mb-4">
              <input 
                type="text" 
                value={newFlavor}
                onChange={(e) => setNewFlavor(e.target.value)}
                placeholder="Ex: Baunilha, Morango..." 
                className="flex-1 bg-background border border-slate-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:border-brand-neon" 
              />
              <button onClick={addFlavor} className="bg-slate-700 hover:bg-slate-600 px-4 rounded-lg font-bold text-white flex items-center gap-1">
                <Plus size={18} /> Adicionar
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              {flavors.map(flavor => (
                <span key={flavor} className="bg-slate-800 border border-slate-700 px-3 py-1 rounded-full text-sm text-slate-300 flex items-center gap-2">
                  {flavor}
                  <button onClick={() => removeFlavor(flavor)} className="text-red-500 hover:text-red-400"><Trash2 size={14} /></button>
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Coluna Lateral (1/3 do espaço) */}
        <div className="space-y-6">
          
          {/* Card 3: Imagens */}
          <div className="bg-surface p-6 rounded-xl border border-slate-800">
            <h2 className="text-lg font-bold text-white mb-4">Imagem Principal</h2>
            <div className="border-2 border-dashed border-slate-700 rounded-lg p-6 flex flex-col items-center justify-center text-slate-500 hover:border-brand-neon transition-colors cursor-pointer bg-background">
              <Upload size={32} className="mb-2" />
              <span className="text-sm font-medium">Clique para fazer upload</span>
              <span className="text-xs">PNG, JPG até 5MB</span>
            </div>
          </div>

          {/* Card 4: Preço e Estoque */}
          <div className="bg-surface p-6 rounded-xl border border-slate-800 space-y-4">
            <h2 className="text-lg font-bold text-white">Preço e Estoque</h2>
            <div>
              <label className="block text-sm font-medium text-slate-400 mb-1">Preço (R$)</label>
              <input type="number" placeholder="0.00" className="w-full bg-background border border-slate-700 text-white px-4 py-2 rounded-lg font-bold text-lg focus:outline-none focus:border-brand-neon" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-400 mb-1">Quantidade em Estoque</label>
              <input type="number" placeholder="0" className="w-full bg-background border border-slate-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:border-brand-neon" />
            </div>
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-slate-400 mb-1">
                <Calendar size={14} /> Data de Validade (Lote Atual)
              </label>
              <input type="date" className="w-full bg-background border border-slate-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:border-brand-neon" />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}