import React from 'react';
import { X, Trash2, ArrowRight } from 'lucide-react';
import { useCart } from '../../contexts/CartContext'; // Importar o Hook
import { Link } from 'react-router-dom';

export default function CartDrawer({ isOpen, onClose }) {
  // Puxando os dados reais do contexto
  const { cartItems, removeFromCart, cartTotal, cartCount } = useCart();

  return (
    <>
      <div className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-50 transition-opacity duration-300 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`} onClick={onClose} />

      <div className={`fixed top-0 right-0 h-full w-[350px] bg-surface shadow-2xl z-50 transform transition-transform duration-300 flex flex-col ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>

        {/* Cabeçalho */}
        <div className="flex items-center justify-between p-4 border-b border-slate-700">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            SEU CARRINHO <span className="bg-slate-700 px-2 py-0.5 rounded text-sm text-brand-neon">{cartCount} itens</span>
          </h2>
          <button onClick={onClose} className="text-slate-400 hover:text-white">
            <X size={24} />
          </button>
        </div>
        {/* Lista de Produtos Dinâmica */}
        <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4">
          {cartItems.length === 0 ? (
            <div className="text-slate-500 text-center mt-10">O seu carrinho está vazio.</div>
          ) : (
            cartItems.map(item => {
              // 1. Criamos o caminho correto aqui dentro do map
              const itemImg = item.image || item.images[0];
              const fullPath = `${import.meta.env.BASE_URL}${itemImg.replace(/^\//, '')}`;

              return (
                <div key={`${item.id}-${item.flavor}`} className="flex gap-3 bg-background p-2 rounded-lg border border-slate-800">
                  {/* 2. Usamos o fullPath aqui no src */}
                  <img
                    src={fullPath}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded bg-slate-900"
                  />

                  <div className="flex-1 flex flex-col justify-between">
                    <span className="text-sm font-semibold text-white leading-tight">{item.name}</span>
                    <span className="text-xs text-slate-400">Sabor: {item.flavor} | Qtd: {item.qtd}</span>
                    <div className="flex justify-between items-center mt-1">
                      <span className="text-brand-neon font-bold">R$ {(item.price * item.qtd).toFixed(2)}</span>
                      <button
                        onClick={() => removeFromCart(item.id, item.flavor)}
                        className="text-slate-500 hover:text-red-500 transition-colors"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Rodapé Dinâmico */}
        <div className="p-4 border-t border-slate-700 bg-slate-900">
          <div className="flex justify-between text-white font-bold text-lg mb-4">
            <span>Total</span>
            <span className="text-brand-neon">R$ {cartTotal.toFixed(2)}</span>
          </div>
          <Link
            to="/checkout"
            onClick={onClose} /* Fecha a gaveta quando clica */
            className={`w-full bg-brand-neon text-black font-bold py-3 px-4 rounded-lg hover:bg-green-400 transition-colors flex justify-center items-center gap-2 ${cartItems.length === 0 ? 'pointer-events-none opacity-50' : ''}`}
          >
            FINALIZAR COMPRA <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </>
  );
}