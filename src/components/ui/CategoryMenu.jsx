import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Dumbbell, Zap, Beaker, Shirt } from 'lucide-react';
import products from '../../data/products'; // Ajuste o caminho conforme necessário

// Extraindo categorias únicas dos produtos
const categories = [...new Set(products.map(p => p.category))];

// Mapeamento opcional de ícones para categorias (opcional, mas dá um toque premium)
const iconMap = {
    'Proteínas': Dumbbell,
    'Performance': Zap,
    'Aminoácidos': Beaker,
    'Vestuário': Shirt
};

export default function CategoryMenu() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            className="relative hidden md:block" // Escondido no mobile, visível no desktop
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
        >
            {/* Botão Gatilho */}
            <button
                className={`flex items-center gap-2 px-3 py-2 rounded-lg font-medium transition-all duration-300
          ${isOpen ? 'text-brand-neon bg-slate-800' : 'text-slate-300 hover:text-white hover:bg-slate-800/50'}
        `}
            >
                <span>Categorias</span>
                <ChevronDown
                    size={16}
                    className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                />
            </button>

            {/* Dropdown Area */}
            <div
                className={`absolute top-full left-0 w-64 pt-2 transition-all duration-300 transform origin-top-left z-50
          ${isOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-2 invisible'}
        `}
            >
                <div className="bg-surface border border-slate-700 rounded-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] overflow-hidden">
                    <div className="py-2">
                        {categories.map((category) => {
                            const Icon = iconMap[category] || Dumbbell;

                            return (
                                <Link
                                    key={category}
                                    to={`/categoria/${category.toLowerCase()}`}
                                    className="group flex items-center gap-3 px-4 py-3 hover:bg-slate-700/50 transition-colors border-l-2 border-transparent hover:border-brand-neon"
                                >
                                    <div className="p-2 bg-slate-800 rounded-lg text-slate-400 group-hover:text-brand-neon group-hover:bg-slate-900 transition-colors">
                                        <Icon size={18} />
                                    </div>
                                    <div>
                                        <span className="block text-sm font-medium text-slate-200 group-hover:text-white">
                                            {category}
                                        </span>
                                        <span className="block text-xs text-slate-500 group-hover:text-slate-400">
                                            Ver produtos
                                        </span>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>

                    {/* Link para ver tudo */}
                    <div className="bg-slate-900/50 p-3 border-t border-slate-700 text-center">
                        <Link to="/produtos" className="text-xs font-bold text-brand-neon hover:underline tracking-wide uppercase">
                            Ver Catálogo Completo
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}