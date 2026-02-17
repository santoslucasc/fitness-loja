import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { X, Search, ChevronRight, Home, User, ShoppingBag, Dumbbell } from 'lucide-react';
import products from '../../data/products'; // Importando para pegar categorias dinâmicas

export default function MobileMenu({ isOpen, onClose, searchQuery, setSearchQuery }) {
    const navigate = useNavigate();

    // Extrair categorias únicas (mesma lógica do desktop)
    const categories = [...new Set(products.map(p => p.category))];

    // Fechar menu ao mudar de rota (navegação)
    useEffect(() => {
        // Lógica opcional: Se a rota mudar, feche o menu
        // Mas vamos manter simples: o Link onClick chama onClose
    }, []);

    // Handler para busca no mobile
    const handleSearchSubmit = (e) => {
        e.preventDefault();
        onClose();
        // Se tiver uma página de busca, navegaria aqui. 
        // Por enquanto, atualiza o estado global.
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex md:hidden">
            {/* Overlay Escuro (clique fecha) */}
            <div
                className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            />

            {/* Painel Lateral */}
            <div className="relative w-[85%] max-w-sm bg-surface h-full shadow-2xl border-r border-slate-700 flex flex-col animate-slide-in-left">

                {/* Cabeçalho do Menu */}
                <div className="p-4 flex items-center justify-between border-b border-slate-700 bg-slate-900/50">
                    <div className="flex items-center gap-2">
                        <span className="font-extrabold text-xl tracking-tighter text-white">
                            FIT<span className="text-brand-neon">PRO</span>
                        </span>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
                    >
                        <X size={24} />
                    </button>
                </div>

                {/* Conteúdo Scrollável */}
                <div className="flex-1 overflow-y-auto py-4 px-4 space-y-6">

                    {/* Barra de Busca Mobile (Já que ela some da Navbar em telas pequenas) */}
                    <form onSubmit={handleSearchSubmit} className="relative">
                        <input
                            type="text"
                            placeholder="O que você procura?"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full bg-slate-900 border border-slate-700 text-white px-4 py-3 pl-10 rounded-xl focus:outline-none focus:border-brand-neon focus:ring-1 focus:ring-brand-neon transition-all placeholder:text-slate-500"
                        />
                        <Search className="absolute left-3 top-3.5 text-slate-500" size={18} />
                    </form>

                    {/* Navegação Principal */}
                    <nav className="space-y-1">
                        <Link
                            to="/"
                            onClick={onClose}
                            className="flex items-center gap-3 px-3 py-3 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
                        >
                            <Home size={20} />
                            <span className="font-medium">Início</span>
                        </Link>

                        <Link
                            to="/minha-conta"
                            onClick={onClose}
                            className="flex items-center gap-3 px-3 py-3 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
                        >
                            <User size={20} />
                            <span className="font-medium">Minha Conta</span>
                        </Link>
                    </nav>

                    {/* Seção de Categorias */}
                    <div>
                        <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3 px-3">
                            Categorias
                        </h3>
                        <div className="space-y-1">
                            {categories.map((category) => (
                                <Link
                                    key={category}
                                    to={`/categoria/${category.toLowerCase()}`}
                                    onClick={onClose}
                                    className="group flex items-center justify-between px-3 py-3 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-colors border-l-2 border-transparent hover:border-brand-neon"
                                >
                                    <div className="flex items-center gap-3">
                                        <Dumbbell size={18} className="text-slate-500 group-hover:text-brand-neon transition-colors" />
                                        <span>{category}</span>
                                    </div>
                                    <ChevronRight size={16} className="text-slate-600 group-hover:text-white" />
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Footer do Menu */}
                <div className="p-4 border-t border-slate-700 bg-slate-900/30">
                    <Link
                        to="/checkout"
                        onClick={onClose}
                        className="w-full flex items-center justify-center gap-2 bg-brand-neon text-black font-bold py-3 rounded-xl hover:bg-green-400 transition-colors shadow-lg shadow-brand-neon/20"
                    >
                        <ShoppingBag size={20} />
                        Ir para o Carrinho
                    </Link>
                </div>

            </div>
        </div>
    );
}