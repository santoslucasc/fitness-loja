import React, { useEffect, useState } from 'react';
import { CheckCircle, X } from 'lucide-react';

export default function CartNotification({ item, onClose }) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Trigger animation
        setIsVisible(true);

        // Auto-close after 3 seconds
        const timer = setTimeout(() => {
            setIsVisible(false);
            setTimeout(onClose, 300); // Wait for fade out animation
        }, 3000);

        return () => clearTimeout(timer);
    }, [onClose]);

    if (!item) return null;

    return (
        <div
            className={`fixed top-20 right-4 z-50 bg-surface border border-brand-neon/50 rounded-xl p-4 shadow-[0_0_30px_rgba(34,197,94,0.3)] max-w-sm transition-all duration-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
                }`}
        >
            <div className="flex items-start gap-3">
                {/* Success Icon */}
                <div className="bg-brand-neon/10 rounded-full p-2 flex-shrink-0">
                    <CheckCircle className="text-brand-neon" size={20} />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                    <p className="text-white font-bold text-sm mb-1">Adicionado ao carrinho!</p>
                    <p className="text-slate-400 text-xs truncate">{item.name}</p>
                    {item.flavor && (
                        <p className="text-slate-500 text-xs">Sabor: {item.flavor}</p>
                    )}
                </div>

                {/* Close Button */}
                <button
                    onClick={() => {
                        setIsVisible(false);
                        setTimeout(onClose, 300);
                    }}
                    className="text-slate-400 hover:text-white transition-colors flex-shrink-0"
                >
                    <X size={16} />
                </button>
            </div>

            {/* Product Image (optional) */}
            {item.images && item.images[0] && (
                <div className="mt-3 flex items-center gap-3 pt-3 border-t border-slate-800">
                    <img
                        src={item.images[0]}
                        alt={item.name}
                        className="w-12 h-12 object-contain rounded"
                    />
                    <div className="text-xs">
                        <span className="text-brand-neon font-bold">R$ {item.price.toFixed(2)}</span>
                        <span className="text-slate-500 ml-2">Qtd: 1</span>
                    </div>
                </div>
            )}
        </div>
    );
}
