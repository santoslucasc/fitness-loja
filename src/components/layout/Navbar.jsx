import { Link } from 'react-router-dom';
import { Search, User, ShoppingBag, Menu } from 'lucide-react';
import { useCart } from '../../contexts/CartContext';

export default function Navbar({ onOpenCart, searchQuery, setSearchQuery }) {
  const { cartCount } = useCart();

  return (
    <nav className="bg-surface/80 backdrop-blur-md border-b border-slate-800 sticky top-0 z-40">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between gap-4">

        {/* Esquerda: Logo e Menu Mobile */}
        <div className="flex items-center gap-4">
          <button className="md:hidden text-text-secondary hover:text-white">
            <Menu size={24} />
          </button>
          <Link to="/" className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-brand-neon/20 to-emerald-400/20 blur-xl group-hover:blur-2xl transition-all"></div>
            <div className="relative font-extrabold text-2xl tracking-tighter text-white px-3 py-1.5 bg-slate-900/50 backdrop-blur-sm rounded-lg border border-slate-700/50 shadow-[0_0_20px_rgba(34,197,94,0.3)] group-hover:shadow-[0_0_30px_rgba(34,197,94,0.5)] transition-all">
              <span className="drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">FIT</span>
              <span className="text-brand-neon drop-shadow-[0_0_8px_rgba(34,197,94,0.8)] stroke-text">PRO</span>
            </div>
          </Link>
        </div>

        {/* Centro: Barra de Busca (Desktop) */}
        <div className="hidden md:flex flex-1 max-w-xl relative">
          <input
            type="text"
            placeholder="Buscar suplementos, roupas..."
            value={searchQuery || ''}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-background border border-slate-700 text-white px-4 py-2 pl-10 rounded-lg focus:outline-none focus:border-brand-neon transition-colors"
          />
          <Search className="absolute left-3 top-2.5 text-slate-500" size={18} />
        </div>

        {/* Direita: Ícones de Ação */}
        <div className="flex items-center gap-4">
          <Link to="/minha-conta" className="text-text-secondary hover:text-white transition-colors">
            <User size={24} />
          </Link>

          <button
            onClick={onOpenCart}
            className="text-text-secondary hover:text-brand-neon transition-colors relative"
          >
            <ShoppingBag size={24} />
            {/* Badge de quantidade no carrinho */}
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-brand-neon text-black text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}