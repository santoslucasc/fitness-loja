import React from 'react';
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-slate-950 border-t border-slate-800 mt-20">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

                    {/* Coluna 1: Logo e Descrição */}
                    <div>
                        <div className="relative inline-block group mb-4">
                            <div className="absolute inset-0 bg-gradient-to-r from-brand-neon/20 to-emerald-400/20 blur-xl"></div>
                            <div className="relative font-extrabold text-2xl tracking-tighter text-white px-3 py-1.5 bg-slate-900/50 backdrop-blur-sm rounded-lg border border-slate-700/50 shadow-[0_0_20px_rgba(34,197,94,0.3)]">
                                <span className="drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">FIT</span>
                                <span className="text-brand-neon drop-shadow-[0_0_8px_rgba(34,197,94,0.8)]">PRO</span>
                            </div>
                        </div>
                        <p className="text-slate-400 text-sm mb-4">
                            Sua loja de suplementos e equipamentos fitness de confiança. Levando você ao próximo nível.
                        </p>
                        <div className="flex gap-3">
                            <a href="#" className="bg-white/5 hover:bg-white/10 p-2 rounded-lg transition-colors">
                                <Facebook size={18} className="text-slate-400" />
                            </a>
                            <a href="#" className="bg-white/5 hover:bg-white/10 p-2 rounded-lg transition-colors">
                                <Instagram size={18} className="text-slate-400" />
                            </a>
                            <a href="#" className="bg-white/5 hover:bg-white/10 p-2 rounded-lg transition-colors">
                                <Twitter size={18} className="text-slate-400" />
                            </a>
                        </div>
                    </div>

                    {/* Coluna 2: Links Rápidos */}
                    <div>
                        <h3 className="text-white font-bold mb-4">Links Rápidos</h3>
                        <ul className="space-y-2">
                            <li><a href="/" className="text-slate-400 hover:text-brand-neon transition-colors text-sm">Home</a></li>
                            <li><a href="/minha-conta" className="text-slate-400 hover:text-brand-neon transition-colors text-sm">Minha Conta</a></li>
                            <li><a href="/checkout" className="text-slate-400 hover:text-brand-neon transition-colors text-sm">Carrinho</a></li>
                            <li><a href="#" className="text-slate-400 hover:text-brand-neon transition-colors text-sm">Ajuda</a></li>
                        </ul>
                    </div>

                    {/* Coluna 3: Sobre */}
                    <div>
                        <h3 className="text-white font-bold mb-4">Sobre a FitPro</h3>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            Trabalhamos com marcas reconhecidas mundialmente e produtos cientificamente comprovados.
                            Mais de 1000 atletas confiam na gente para alcançar seus objetivos.
                        </p>
                    </div>

                    {/* Coluna 4: Contato */}
                    <div>
                        <h3 className="text-white font-bold mb-4">Contato</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-2 text-slate-400 text-sm">
                                <MapPin size={16} className="text-brand-neon mt-0.5 flex-shrink-0" />
                                <span>Rua Fitness, 123 - Centro<br />São Paulo, SP - 01234-567</span>
                            </li>
                            <li className="flex items-center gap-2 text-slate-400 text-sm">
                                <Phone size={16} className="text-brand-neon flex-shrink-0" />
                                <span>(11) 98765-4321</span>
                            </li>
                            <li className="flex items-center gap-2 text-slate-400 text-sm">
                                <Mail size={16} className="text-brand-neon flex-shrink-0" />
                                <span>contato@fitpro.com.br</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Linha de Separação */}
                <div className="border-t border-slate-800 mt-8 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-slate-500 text-sm">
                            © 2024 FitPro. Todos os direitos reservados.
                        </p>
                        <p className="text-slate-500 text-xs">
                            <span className="text-slate-400 font-semibold">CNPJ:</span> 12.345.678/0001-90
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
