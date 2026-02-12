import React, { useState } from 'react';
import { CreditCard, Plus, Trash2, Lock } from 'lucide-react';
import { useUser } from '../../contexts/UserContext';

export default function PaymentMethods() {
    const { cards, addCard, removeCard } = useUser();
    const [showForm, setShowForm] = useState(false);
    const [newCard, setNewCard] = useState({ number: '', name: '', expiry: '', cvc: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulação simples: pega os últimos 4 dígitos
        const last4 = newCard.number.slice(-4);
        addCard({ last4, expiry: newCard.expiry, brand: 'mastercard' }); // Mockando a brand
        setShowForm(false);
        setNewCard({ number: '', name: '', expiry: '', cvc: '' });
    };

    return (
        <div className="bg-surface border border-slate-800 rounded-xl p-6">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                    <CreditCard className="text-brand-neon" /> Pagamentos
                </h2>
                <button
                    onClick={() => setShowForm(!showForm)}
                    className="bg-slate-800 hover:bg-slate-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors text-sm"
                >
                    <Plus size={16} /> Novo Cartão
                </button>
            </div>

            {showForm && (
                <form onSubmit={handleSubmit} className="bg-slate-900/50 p-4 rounded-lg border border-slate-700 mb-6 grid gap-4 grid-cols-1 md:grid-cols-2">
                    <div className="md:col-span-2 bg-yellow-500/10 text-yellow-500 text-xs p-2 rounded flex items-center gap-2">
                        <Lock size={12} /> Seus dados são criptografados e seguros.
                    </div>
                    <input
                        type="text" placeholder="Número do Cartão" required maxLength={19}
                        className="md:col-span-2 bg-background border border-slate-700 text-white p-2 rounded focus:border-brand-neon outline-none"
                        value={newCard.number} onChange={e => setNewCard({ ...newCard, number: e.target.value })}
                    />
                    <input
                        type="text" placeholder="Nome no Cartão" required
                        className="md:col-span-2 bg-background border border-slate-700 text-white p-2 rounded focus:border-brand-neon outline-none"
                        value={newCard.name} onChange={e => setNewCard({ ...newCard, name: e.target.value })}
                    />
                    <input
                        type="text" placeholder="Validade (MM/AA)" required maxLength={5}
                        className="bg-background border border-slate-700 text-white p-2 rounded focus:border-brand-neon outline-none"
                        value={newCard.expiry} onChange={e => setNewCard({ ...newCard, expiry: e.target.value })}
                    />
                    <input
                        type="text" placeholder="CVC" required maxLength={3}
                        className="bg-background border border-slate-700 text-white p-2 rounded focus:border-brand-neon outline-none"
                        value={newCard.cvc} onChange={e => setNewCard({ ...newCard, cvc: e.target.value })}
                    />
                    <div className="md:col-span-2 flex justify-end gap-2 mt-2">
                        <button type="button" onClick={() => setShowForm(false)} className="text-slate-400 hover:text-white px-4">Cancelar</button>
                        <button type="submit" className="bg-brand-neon text-black font-bold px-6 py-2 rounded shadow-lg hover:bg-green-400">Adicionar</button>
                    </div>
                </form>
            )}

            <div className="space-y-3">
                {cards.map(card => (
                    <div key={card.id} className="bg-gradient-to-r from-slate-900 to-slate-800 border border-slate-700 rounded-lg p-4 flex items-center justify-between group hover:border-slate-500 transition-colors">
                        <div className="flex items-center gap-4">
                            <div className="bg-white/10 p-2 rounded">
                                <CreditCard className="text-white" size={24} />
                            </div>
                            <div>
                                <p className="text-white font-mono tracking-wider">•••• •••• •••• {card.last4}</p>
                                <p className="text-slate-500 text-xs uppercase">Vence em {card.expiry}</p>
                            </div>
                        </div>
                        <button
                            onClick={() => removeCard(card.id)}
                            className="text-slate-600 hover:text-red-500 transition-colors p-2"
                            title="Remover cartão"
                        >
                            <Trash2 size={20} />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
