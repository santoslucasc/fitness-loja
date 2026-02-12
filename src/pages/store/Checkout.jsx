import React, { useState } from 'react';
import { useCart } from '../../contexts/CartContext';
import { CreditCard, QrCode, ShieldCheck, Lock, Truck, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Checkout() {
  const { cartItems, cartTotal } = useCart();
  const [paymentMethod, setPaymentMethod] = useState('pix'); // 'pix' ou 'card'

  // Simulação de frete (R$ 15.00 fixo para o exemplo)
  const shippingCost = cartItems.length > 0 ? 15.00 : 0;
  const finalTotal = cartTotal + shippingCost;

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="flex items-center gap-2 text-sm text-slate-500 mb-8">
        <Link to="/" className="hover:text-white">Loja</Link> <ChevronRight size={14} /> 
        <span className="text-white font-medium">Checkout Seguro</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* COLUNA ESQUERDA (DADOS E PAGAMENTO) */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* 1. Dados Pessoais e Endereço */}
          <div className="bg-surface p-6 rounded-xl border border-slate-800">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="bg-brand-neon text-black w-6 h-6 rounded-full flex items-center justify-center text-sm">1</span>
              Dados de Entrega
            </h2>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input type="text" placeholder="Nome Completo" className="w-full bg-background border border-slate-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-brand-neon" />
                <input type="email" placeholder="E-mail" className="w-full bg-background border border-slate-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-brand-neon" />
              </div>
              <div className="grid grid-cols-3 gap-4">
                <input type="text" placeholder="CEP" className="bg-background border border-slate-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-brand-neon" />
                <input type="text" placeholder="Rua" className="col-span-2 bg-background border border-slate-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-brand-neon" />
              </div>
              <div className="grid grid-cols-3 gap-4">
                <input type="text" placeholder="Número" className="bg-background border border-slate-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-brand-neon" />
                <input type="text" placeholder="Bairro" className="col-span-2 bg-background border border-slate-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-brand-neon" />
              </div>
            </div>
          </div>

          {/* 2. Método de Pagamento */}
          <div className="bg-surface p-6 rounded-xl border border-slate-800">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="bg-brand-neon text-black w-6 h-6 rounded-full flex items-center justify-center text-sm">2</span>
              Pagamento (Mercado Pago)
            </h2>
            
            {/* Seleção do Método */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <button 
                onClick={() => setPaymentMethod('pix')}
                className={`flex items-center justify-center gap-2 p-4 rounded-lg border-2 font-bold transition-all ${paymentMethod === 'pix' ? 'border-brand-neon bg-brand-neon/10 text-brand-neon' : 'border-slate-700 text-slate-400 hover:border-slate-500'}`}
              >
                <QrCode size={20} /> PIX (5% OFF)
              </button>
              <button 
                onClick={() => setPaymentMethod('card')}
                className={`flex items-center justify-center gap-2 p-4 rounded-lg border-2 font-bold transition-all ${paymentMethod === 'card' ? 'border-brand-neon bg-brand-neon/10 text-brand-neon' : 'border-slate-700 text-slate-400 hover:border-slate-500'}`}
              >
                <CreditCard size={20} /> CARTÃO
              </button>
            </div>

            {/* Formulário Dinâmico de Pagamento */}
            {paymentMethod === 'card' ? (
              <div className="space-y-4 animate-fadeIn">
                <input type="text" placeholder="Número do Cartão" className="w-full bg-background border border-slate-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-brand-neon" />
                <div className="grid grid-cols-2 gap-4">
                  <input type="text" placeholder="Validade (MM/AA)" className="w-full bg-background border border-slate-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-brand-neon" />
                  <input type="text" placeholder="CVC" className="w-full bg-background border border-slate-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-brand-neon" />
                </div>
                <input type="text" placeholder="Nome como no cartão" className="w-full bg-background border border-slate-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-brand-neon" />
              </div>
            ) : (
              <div className="bg-background border border-slate-700 p-6 rounded-lg text-center animate-fadeIn">
                <QrCode size={48} className="mx-auto text-brand-neon mb-2" />
                <p className="text-white font-bold mb-1">Pagamento via PIX</p>
                <p className="text-slate-400 text-sm">Um QR Code será gerado após você clicar em "Finalizar Compra".</p>
              </div>
            )}
          </div>
        </div>

        {/* COLUNA DIREITA (RESUMO DO PEDIDO) */}
        <div className="lg:col-span-5">
          <div className="bg-surface p-6 rounded-xl border border-slate-800 sticky top-24">
            <h2 className="text-xl font-bold text-white mb-6">Resumo do Pedido</h2>
            
            {/* Lista de Itens do Carrinho */}
            <div className="space-y-4 mb-6 max-h-60 overflow-y-auto pr-2">
              {cartItems.map((item) => (
                <div key={`${item.id}-${item.flavor}`} className="flex justify-between items-center gap-4">
                  <img src={item.image || item.images[0]} alt={item.name} className="w-12 h-12 rounded bg-slate-900 object-cover" />
                  <div className="flex-1">
                    <p className="text-sm text-white font-medium line-clamp-1">{item.name}</p>
                    <p className="text-xs text-slate-500">Sabor: {item.flavor} | Qtd: {item.qtd}</p>
                  </div>
                  <span className="text-brand-neon font-bold">R$ {(item.price * item.qtd).toFixed(2)}</span>
                </div>
              ))}
            </div>

            <hr className="border-slate-800 mb-4" />

            {/* Totais */}
            <div className="space-y-2 mb-6">
              <div className="flex justify-between text-slate-400 text-sm">
                <span>Subtotal</span>
                <span>R$ {cartTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-slate-400 text-sm">
                <span className="flex items-center gap-1"><Truck size={14} /> Frete Transportadora</span>
                <span>R$ {shippingCost.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-white font-black text-xl pt-4 border-t border-slate-800 mt-4">
                <span>Total</span>
                <span className="text-brand-neon">R$ {finalTotal.toFixed(2)}</span>
              </div>
            </div>

            {/* Botão de Finalizar */}
            <button className="w-full bg-brand-neon text-black font-black text-lg py-4 rounded-xl hover:bg-green-400 transition-colors flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(34,197,94,0.2)]">
              <Lock size={20} /> FINALIZAR COMPRA
            </button>

            <div className="mt-4 flex items-center justify-center gap-2 text-xs text-slate-500">
              <ShieldCheck size={16} className="text-green-500" />
              Pagamento 100% seguro processado pelo Mercado Pago
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}