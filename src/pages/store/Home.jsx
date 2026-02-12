import React, { useRef, useState } from 'react';
import ProductCard from '../../components/ui/ProductCard';
import products from '../../data/products';
import { Award, Target, Users, Zap, ChevronDown, ChevronUp } from 'lucide-react';

export default function Home({ searchQuery = '' }) {
  // Refs para scroll suave
  const productsRef = useRef(null);
  const aboutRef = useRef(null);

  // State para controlar visibilidade do "Sobre"
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  // Funções de scroll
  const scrollToProducts = () => {
    productsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const toggleAbout = () => {
    setIsAboutOpen(!isAboutOpen);
    if (!isAboutOpen) {
      // Pequeno delay para dar tempo da animação abrir antes de scrollar
      setTimeout(() => {
        aboutRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  };

  // Filtrar produtos com base na busca
  const filteredProducts = products.filter(product => {
    const query = searchQuery.toLowerCase();
    return (
      product.name.toLowerCase().includes(query) ||
      product.brand.toLowerCase().includes(query) ||
      product.category.toLowerCase().includes(query)
    );
  });

  return (
    <div className="min-h-screen pb-20">
      {/* Hero Banner Moderno com Efeitos */}
      <div className="relative w-full h-[500px] bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 flex items-center justify-center overflow-hidden border-b border-slate-700">

        {/* Elementos Decorativos Flutuantes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-brand-neon/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-cyan-500/5 rounded-full blur-2xl animate-pulse delay-500"></div>
        </div>

        {/* Grid de fundo */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5"></div>

        {/* Conteúdo Principal com Glassmorphism */}
        <div className="relative z-10 text-center px-4 max-w-4xl">

          <h1 className="text-6xl md:text-7xl font-black text-white mb-6 tracking-tight leading-tight">
            ELEVATE YOUR <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-neon via-emerald-400 to-cyan-400 animate-pulse">
              GAME
            </span>
          </h1>

          <p className="text-slate-300 text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
            Suplementação de elite e equipamentos de alta performance para quem não aceita o segundo lugar.
          </p>

          {/* Botões */}
          <div className="flex gap-4 justify-center mb-10">
            <button
              onClick={scrollToProducts}
              className="group bg-brand-neon hover:bg-emerald-400 text-black font-extrabold py-4 px-8 rounded-xl transition-all shadow-[0_0_30px_rgba(34,197,94,0.5)] hover:shadow-[0_0_50px_rgba(34,197,94,0.8)] hover:scale-105"
            >
              VER OFERTAS
              <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </button>
            <button
              onClick={toggleAbout}
              className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white font-bold py-4 px-8 rounded-xl transition-all flex items-center gap-2"
            >
              CONHECER MAIS
              {isAboutOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
          </div>

          {/* Estatísticas com Glassmorphism */}
          <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all">
              <div className="text-3xl font-black text-brand-neon mb-1">1000+</div>
              <div className="text-xs text-slate-400 uppercase tracking-wider">Clientes Ativos</div>
            </div>
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all">
              <div className="text-3xl font-black text-brand-neon mb-1">24h</div>
              <div className="text-xs text-slate-400 uppercase tracking-wider">Entrega Expressa</div>
            </div>
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all">
              <div className="text-3xl font-black text-brand-neon mb-1">100%</div>
              <div className="text-xs text-slate-400 uppercase tracking-wider">Produtos Originais</div>
            </div>
          </div>
        </div>
      </div>

      {/* Seção Sobre Nós - Colapsável */}
      {isAboutOpen && (
        <div ref={aboutRef} className="bg-gradient-to-b from-slate-900 to-background py-20 animate-in fade-in slide-in-from-top duration-500">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-black text-white text-center mb-4">
                Mais que uma loja, <span className="text-brand-neon">somos parceiros</span>
              </h2>
              <p className="text-slate-400 text-center text-lg mb-12 max-w-2xl mx-auto">
                Na FitPro, acreditamos que cada atleta merece o melhor. Por isso, selecionamos apenas produtos de alta qualidade e oferecemos suporte completo para sua jornada fitness.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                {/* Card 1 */}
                <div className="bg-surface border border-slate-800 rounded-2xl p-6 hover:border-brand-neon/50 transition-all">
                  <div className="bg-brand-neon/10 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                    <Target className="text-brand-neon" size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Foco em Resultados</h3>
                  <p className="text-slate-400">
                    Trabalhamos com marcas reconhecidas mundialmente e produtos cientificamente comprovados para garantir que você alcance seus objetivos.
                  </p>
                </div>

                {/* Card 2 */}
                <div className="bg-surface border border-slate-800 rounded-2xl p-6 hover:border-brand-neon/50 transition-all">
                  <div className="bg-brand-neon/10 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                    <Users className="text-brand-neon" size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Comunidade de Atletas</h3>
                  <p className="text-slate-400">
                    Mais de 1000 atletas confiam na gente. Seja você iniciante ou profissional, temos o produto ideal para você.
                  </p>
                </div>

                {/* Card 3 */}
                <div className="bg-surface border border-slate-800 rounded-2xl p-6 hover:border-brand-neon/50 transition-all">
                  <div className="bg-brand-neon/10 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                    <Zap className="text-brand-neon" size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Entrega Rápida e Segura</h3>
                  <p className="text-slate-400">
                    Receba seus suplementos em até 24h. Embalagem discreta e rastreamento completo para total tranquilidade.
                  </p>
                </div>

                {/* Card 4 */}
                <div className="bg-surface border border-slate-800 rounded-2xl p-6 hover:border-brand-neon/50 transition-all">
                  <div className="bg-brand-neon/10 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                    <Award className="text-brand-neon" size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Qualidade Garantida</h3>
                  <p className="text-slate-400">
                    Todos os produtos passam por rigoroso controle de qualidade. Se não ficar satisfeito, devolvemos seu dinheiro.
                  </p>
                </div>
              </div>

              <div className="text-center">
                <button
                  onClick={scrollToProducts}
                  className="bg-brand-neon hover:bg-emerald-400 text-black font-extrabold py-4 px-10 rounded-xl transition-all shadow-[0_0_30px_rgba(34,197,94,0.3)] hover:shadow-[0_0_50px_rgba(34,197,94,0.6)]"
                >
                  Começar Agora
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Grid de Produtos */}
      <div ref={productsRef} className="container mx-auto px-4 mt-12">
        <h2 className="text-2xl font-bold text-white mb-6 border-l-4 border-brand-neon pl-4">
          {searchQuery ? `Resultados para "${searchQuery}"` : 'Destaques da Semana'}
        </h2>

        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((prod) => (
              <ProductCard key={prod.id} product={prod} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-slate-400 text-lg">
              Nenhum produto encontrado para "{searchQuery}"
            </p>
            <p className="text-slate-500 text-sm mt-2">
              Tente buscar por outro termo
            </p>
          </div>
        )}
      </div>
    </div>
  );
}