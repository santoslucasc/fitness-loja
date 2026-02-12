import React, { useState } from 'react';
import { MapPin, Plus, Trash2 } from 'lucide-react';
import { useUser } from '../../contexts/UserContext';

export default function AddressManager() {
    const { addresses, addAddress, removeAddress } = useUser();
    const [showForm, setShowForm] = useState(false);
    const [newAddress, setNewAddress] = useState({ label: '', street: '', city: '', state: '', zip: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        addAddress(newAddress);
        setShowForm(false);
        setNewAddress({ label: '', street: '', city: '', state: '', zip: '' });
    };

    return (
        <div className="bg-surface border border-slate-800 rounded-xl p-6">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                    <MapPin className="text-brand-neon" /> Endereços
                </h2>
                <button
                    onClick={() => setShowForm(!showForm)}
                    className="bg-slate-800 hover:bg-slate-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors text-sm"
                >
                    <Plus size={16} /> Novo Endereço
                </button>
            </div>

            {showForm && (
                <form onSubmit={handleSubmit} className="bg-slate-900/50 p-4 rounded-lg border border-slate-700 mb-6 grid gap-4 grid-cols-1 md:grid-cols-2">
                    <input
                        type="text" placeholder="Nome do local (Ex: Casa, Trabalho)" required
                        className="bg-background border border-slate-700 text-white p-2 rounded focus:border-brand-neon outline-none"
                        value={newAddress.label} onChange={e => setNewAddress({ ...newAddress, label: e.target.value })}
                    />
                    <input
                        type="text" placeholder="CEP" required
                        className="bg-background border border-slate-700 text-white p-2 rounded focus:border-brand-neon outline-none"
                        value={newAddress.zip} onChange={e => setNewAddress({ ...newAddress, zip: e.target.value })}
                    />
                    <input
                        type="text" placeholder="Rua e Número" required className="md:col-span-2 bg-background border border-slate-700 text-white p-2 rounded focus:border-brand-neon outline-none"
                        value={newAddress.street} onChange={e => setNewAddress({ ...newAddress, street: e.target.value })}
                    />
                    <input
                        type="text" placeholder="Cidade" required
                        className="bg-background border border-slate-700 text-white p-2 rounded focus:border-brand-neon outline-none"
                        value={newAddress.city} onChange={e => setNewAddress({ ...newAddress, city: e.target.value })}
                    />
                    <input
                        type="text" placeholder="Estado (UF)" required maxLength={2}
                        className="bg-background border border-slate-700 text-white p-2 rounded focus:border-brand-neon outline-none uppercase"
                        value={newAddress.state} onChange={e => setNewAddress({ ...newAddress, state: e.target.value })}
                    />
                    <div className="md:col-span-2 flex justify-end gap-2 mt-2">
                        <button type="button" onClick={() => setShowForm(false)} className="text-slate-400 hover:text-white px-4">Cancelar</button>
                        <button type="submit" className="bg-brand-neon text-black font-bold px-6 py-2 rounded shadow-lg hover:bg-green-400">Salvar</button>
                    </div>
                </form>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {addresses.map(addr => (
                    <div key={addr.id} className="relative bg-background/30 border border-slate-700 rounded-lg p-4 group hover:border-brand-neon/50 transition-colors">
                        <div className="flex items-start justify-between">
                            <div>
                                <span className="text-xs font-bold bg-slate-800 text-brand-neon px-2 py-0.5 rounded uppercase tracking-wider mb-2 inline-block">
                                    {addr.label}
                                </span>
                                <p className="text-white font-medium">{addr.street}</p>
                                <p className="text-slate-400 text-sm">{addr.city} - {addr.state}</p>
                                <p className="text-slate-500 text-xs mt-1">CEP: {addr.zip}</p>
                            </div>
                            <button
                                onClick={() => removeAddress(addr.id)}
                                className="text-slate-600 hover:text-red-500 transition-colors p-1"
                                title="Remover endereço"
                            >
                                <Trash2 size={18} />
                            </button>
                        </div>
                        {addr.default && (
                            <div className="absolute top-2 right-2">
                                {/* Badge de padrão se necessário, mas já temos o label */}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
