import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ShoppingBag, Heart, ShieldCheck, Truck, Info, AlertTriangle, ArrowLeft } from 'lucide-react';
import { useCart } from '../../contexts/CartContext';
import products from '../../data/products';

export default function ProductDetail() {
  const { id } = useParams(); // Pega o ID da URL (ex: /produto/2)
  const { addToCart } = useCart();

  // Encontra o produto correto na nossa lista com base no ID
  const productData = products.find(p => p.id === parseInt(id));

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedFlavor, setSelectedFlavor] = useState(productData ? productData.flavors[0] : "");

  // Se o usuário digitar um ID que não existe na URL (ex: /produto/99)
  if (!productData) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-3xl font-bold text-white mb-4">Produto não encontrado :(</h1>
        <Link to="/" className="text-brand-neon hover:underline">Voltar para a loja</Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Botão Voltar */}
      <Link to="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-6 transition-colors">
        <ArrowLeft size={20} /> Voltar para os produtos
      </Link>

      <div className="flex flex-col md:flex-row gap-10">

        {/* Lado Esquerdo: Imagem */}
        <div className="w-full md:w-1/2 flex items-center justify-center bg-slate-900 rounded-2xl p-8 border border-slate-800">
          <img src={productData.images[selectedImage]} alt={productData.name} className="max-w-full max-h-[500px] object-contain drop-shadow-2xl" />
        </div>

        {/* Lado Direito: Informações */}
        <div className="w-full md:w-1/2 flex flex-col">
          <span className="text-brand-neon font-bold tracking-widest text-sm uppercase mb-2">{productData.brand}</span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-white leading-tight mb-2">{productData.name}</h1>

          {/* Preço */}
          <div className="my-6 p-4 bg-surface rounded-xl border border-slate-800">
            {productData.originalPrice > productData.price && (
              <span className="text-slate-400 line-through text-sm">R$ {productData.originalPrice.toFixed(2)}</span>
            )}
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-black text-brand-neon">R$ {productData.price.toFixed(2)}</span>
            </div>
          </div>

          {/* Descrição */}
          <div className="mb-6 text-slate-300 leading-relaxed">
            {productData.description}
          </div>

          {/* Variações (Sabores ou Tamanhos) */}
          <div className="mb-8">
            <h3 className="text-sm font-semibold text-white mb-3 uppercase tracking-wider">
              {productData.category === "Vestuário" ? "Escolha o Tamanho:" : "Escolha o Sabor:"}
            </h3>
            <div className="flex flex-wrap gap-2">
              {productData.flavors.map(flavor => (
                <button
                  key={flavor}
                  onClick={() => setSelectedFlavor(flavor)}
                  className={`px-4 py-2 rounded-lg border font-medium transition-all ${selectedFlavor === flavor ? 'bg-brand-neon border-brand-neon text-black' : 'border-slate-700 text-slate-300 hover:border-slate-500'}`}
                >
                  {flavor}
                </button>
              ))}
            </div>
          </div>

          {/* Botão de Adicionar */}
          <button
            onClick={() => addToCart(productData, selectedFlavor)}
            className="w-full bg-brand-neon hover:bg-green-400 text-black font-extrabold text-lg py-4 px-8 rounded-xl transition-all shadow-[0_0_20px_rgba(34,197,94,0.3)] flex items-center justify-center gap-3 mb-6"
          >
            <ShoppingBag size={24} /> ADICIONAR AO CARRINHO
          </button>

          {/* Alerta de Validade (Exclusivo para Suplementos) */}
          {productData.category !== "Vestuário" && (
            <div className="flex items-center gap-2 text-sm text-yellow-500 bg-yellow-500/10 p-3 rounded-lg border border-yellow-500/20">
              <AlertTriangle size={18} /> Validade do Lote: {new Date(productData.expirationDate).toLocaleDateString('pt-BR')}
            </div>
          )}

        </div>
      </div>
    </div>
  );
}