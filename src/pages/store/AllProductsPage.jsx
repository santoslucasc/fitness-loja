import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ShoppingBag } from 'lucide-react';
import products from '../../data/products'; // Importa todos os produtos
import ProductCard from '../../components/ui/ProductCard'; // Reaproveita o card

export default function AllProductsPage() {

    // Scroll para o topo ao abrir a página
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="container mx-auto px-4 py-8">

            {/* Cabeçalho */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                <div>
                    <Link to="/" className="inline-flex items-center text-slate-400 hover:text-white mb-2 transition-colors text-sm">
                        <ArrowLeft size={16} className="mr-1" /> Voltar para Início
                    </Link>
                    <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                        Catálogo Completo
                        <span className="text-brand-neon">.</span>
                    </h1>
                    <p className="text-slate-400 mt-1">
                        Exibindo todos os {products.length} produtos disponíveis
                    </p>
                </div>
            </div>

            {/* Grid de Todos os Produtos */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>

            {/* Rodapé da listagem (Opcional) */}
            <div className="mt-12 text-center border-t border-slate-800 pt-8">
                <p className="text-slate-500 text-sm">Você chegou ao fim do catálogo.</p>
                <div className="mt-4 flex justify-center">
                    <Link to="/" className="text-brand-neon hover:text-white font-medium transition-colors">
                        Voltar ao topo
                    </Link>
                </div>
            </div>
        </div>
    );
}