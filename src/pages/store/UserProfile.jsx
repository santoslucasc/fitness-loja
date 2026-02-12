import React, { useState } from 'react';
import { User, Package, MapPin, CreditCard, LogOut } from 'lucide-react';
import { useUser } from '../../contexts/UserContext';
import OrderHistory from '../../components/user/OrderHistory';
import AddressManager from '../../components/user/AddressManager';
import PaymentMethods from '../../components/user/PaymentMethods';

export default function UserProfile() {
    const { user } = useUser();
    const [activeTab, setActiveTab] = useState('orders');

    const tabs = [
        { id: 'orders', label: 'Meus Pedidos', icon: <Package size={20} /> },
        { id: 'addresses', label: 'Endereços', icon: <MapPin size={20} /> },
        { id: 'payments', label: 'Cartões', icon: <CreditCard size={20} /> },
    ];

    const renderContent = () => {
        switch (activeTab) {
            case 'orders': return <OrderHistory />;
            case 'addresses': return <AddressManager />;
            case 'payments': return <PaymentMethods />;
            default: return <OrderHistory />;
        }
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-white mb-8">Minha Conta</h1>

            <div className="flex flex-col md:flex-row gap-8">

                {/* Sidebar de Navegação */}
                <div className="w-full md:w-1/4">
                    <div className="bg-surface border border-slate-800 rounded-xl p-6 mb-6">
                        <div className="flex items-center gap-4 mb-6">
                            <img src={user.avatar} alt={user.name} className="w-16 h-16 rounded-full border-2 border-brand-neon" />
                            <div>
                                <h2 className="text-white font-bold text-lg">{user.name}</h2>
                                <p className="text-slate-400 text-sm truncate">{user.email}</p>
                            </div>
                        </div>

                        <nav className="space-y-2">
                            {tabs.map(tab => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${activeTab === tab.id ? 'bg-brand-neon text-black font-bold' : 'text-slate-400 hover:text-white hover:bg-white/5'}`}
                                >
                                    {tab.icon}
                                    {tab.label}
                                </button>
                            ))}
                            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-red-500 hover:bg-red-500/10 transition-colors mt-4">
                                <LogOut size={20} />
                                Sair
                            </button>
                        </nav>
                    </div>
                </div>

                {/* Conteúdo Principal */}
                <div className="w-full md:w-3/4">
                    {renderContent()}
                </div>

            </div>
        </div>
    );
}
