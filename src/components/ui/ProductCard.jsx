import { Link } from 'react-router-dom';
import { ShoppingCart, Zap } from 'lucide-react';

export default function ProductCard({ product }) {
  // Calculando desconto se houver
  const hasDiscount = product.originalPrice > product.price;
  const discountPercent = hasDiscount
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <Link to={'/produto/' + product.id} className="group relative bg-surface rounded-xl overflow-hidden border border-slate-700/50 hover:border-brand-neon/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(34,197,94,0.15)]">

      {/* Área da Imagem */}
      <div className="aspect-[4/5] bg-slate-900 relative overflow-hidden flex items-center justify-center p-4">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500 drop-shadow-2xl"
        />

        {/* Badges (Desconto ou Rápido) */}
        <div className="absolute top-2 left-2 flex flex-col gap-1">
          {hasDiscount && (
            <span className="bg-brand-neon text-black text-xs font-bold px-2 py-1 rounded shadow-lg flex items-center gap-1">
              <Zap size={12} fill="black" /> -{discountPercent}%
            </span>
          )}
        </div>

        {/* Botão Add Rápido (Aparece no Hover em Desktop) */}
        <button
          className="absolute bottom-3 right-3 bg-white text-black p-3 rounded-full translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 hover:bg-brand-neon shadow-lg z-10"
          title="Adicionar ao Carrinho"
        >
          <ShoppingCart size={20} />
        </button>
      </div>

      {/* Informações */}
      <div className="p-4">
        <p className="text-text-secondary text-xs uppercase tracking-wider font-semibold mb-1">
          {product.category}
        </p>
        <h3 className="text-text-primary font-bold text-lg leading-tight mb-2 truncate">
          {product.name}
        </h3>

        <div className="flex items-end justify-between mt-3">
          <div className="flex flex-col">
            {hasDiscount && (
              <span className="text-text-secondary text-xs line-through">
                R$ {product.originalPrice.toFixed(2)}
              </span>
            )}
            <span className="text-brand-neon font-bold text-xl">
              R$ {product.price.toFixed(2)}
            </span>
          </div>

          {/* Rating visual simples */}
          <div className="text-yellow-500 text-xs flex gap-0.5">
            {'★'.repeat(5)}
          </div>
        </div>
      </div>
    </Link>
  );
}