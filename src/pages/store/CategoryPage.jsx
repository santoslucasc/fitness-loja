import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, FilterX } from 'lucide-react';
import products from '../../data/products'; // Importa seus dados
import ProductCard from '../../components/ui/ProductCard'; // [Importante] Usa seu componente pronto

export default function CategoryPage() {
    const { nome } = useParams(); // Pega o parâmetro da URL (ex: "proteinas")

    // 1. Lógica de Filtragem
    // Compara a categoria do produto com o nome na URL (tudo em minúsculo)
    const categoryProducts = products.filter(product =>
        product.category.toLowerCase() === nome?.toLowerCase()
    );

    // 2. Título Formatado (Capitalizar primeira letra para exibição)
    const displayTitle = nome
        ? nome.charAt(0).toUpperCase() + nome.slice(1)
        : 'Categoria';

    // Scroll para o topo ao mudar de categoria
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [nome]);

    return (
        <div className="container mx-auto px-4 py-8">

            {/* Cabeçalho da Página */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                <div>
                    <Link to="/" className="inline-flex items-center text-slate-400 hover:text-white mb-2 transition-colors text-sm">
                        <ArrowLeft size={16} className="mr-1" /> Voltar para Início
                    </Link>
                    <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                        {displayTitle}
                        <span className="text-brand-neon">.</span>
                    </h1>
                    <p className="text-slate-400 mt-1">
                        {categoryProducts.length} produtos encontrados
                    </p>
                </div>
            </div>

            {/* Grid de Produtos - Agora usando o ProductCard */}
            {categoryProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {categoryProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            ) : (
                /* Estado Vazio (Caso digite uma categoria que não existe) */
                <div className="text-center py-20 bg-surface/50 rounded-2xl border border-slate-800 border-dashed">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-800 text-slate-500 mb-4">
                        <FilterX size={32} />
                    </div>
                    <h2 className="text-xl font-bold text-white mb-2">Nenhum produto encontrado</h2>
                    <p className="text-slate-400 max-w-md mx-auto mb-6">
                        Não encontramos produtos na categoria "{nome}". Tente navegar pelo menu ou voltar ao início.
                    </p>
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 bg-brand-neon text-black font-bold px-6 py-3 rounded-xl hover:bg-green-400 transition-colors"
                    >
                        Voltar para a Loja
                    </Link>
                </div>
            )}
        </div>
    );
}