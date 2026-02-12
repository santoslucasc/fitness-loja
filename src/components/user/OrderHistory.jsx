import React from 'react';
import { Package, CheckCircle, Truck, Clock } from 'lucide-react';
import { useUser } from '../../contexts/UserContext';

export default function OrderHistory() {
    const { orders } = useUser();

    const getStatusIcon = (status) => {
        switch (status) {
            case 'Entregue': return <CheckCircle className="text-green-500" size={20} />;
            case 'Em Trânsito': return <Truck className="text-blue-500" size={20} />;
            default: return <Clock className="text-yellow-500" size={20} />;
        }
    };

    return (
        <div className="bg-surface border border-slate-800 rounded-xl p-6">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <Package className="text-brand-neon" /> Meus Pedidos
            </h2>

            <div className="space-y-4">
                {orders.map(order => (
                    <div key={order.id} className="bg-background/50 border border-slate-700/50 rounded-lg p-4 flex flex-col md:flex-row justify-between gap-4 transition-all hover:border-slate-600">
                        <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                                <span className="text-slate-400 text-sm">#{order.id}</span>
                                <span className="text-slate-500 text-xs">• {new Date(order.date).toLocaleDateString()}</span>
                            </div>
                            <p className="text-white font-medium mb-1">{order.items.join(", ")}</p>
                            <p className="text-brand-neon font-bold">R$ {order.total.toFixed(2)}</p>
                        </div>

                        <div className="flex items-center gap-2 bg-slate-900/50 px-4 py-2 rounded-lg border border-slate-800 self-start md:self-center">
                            {getStatusIcon(order.status)}
                            <span className="text-slate-300 text-sm font-medium">{order.status}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
