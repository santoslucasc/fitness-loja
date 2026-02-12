import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Package, ShoppingCart, Users, Settings, LogOut } from 'lucide-react';

export default function AdminLayout({ children }) {
  const location = useLocation();

  const menuItems = [
    { name: 'Dashboard', icon: <LayoutDashboard size={20} />, path: '/admin' },
    { name: 'Produtos', icon: <Package size={20} />, path: '/admin/produtos' },
    { name: 'Pedidos', icon: <ShoppingCart size={20} />, path: '/admin/pedidos' },
    { name: 'Clientes', icon: <Users size={20} />, path: '/admin/clientes' },
    { name: 'Configurações', icon: <Settings size={20} />, path: '/admin/config' },
  ];

  return (
    <div className="min-h-screen bg-background text-text-primary flex">
      {/* Sidebar (Menu Lateral) */}
      <aside className="w-64 bg-surface border-r border-slate-800 flex flex-col">
        <div className="h-16 flex items-center px-6 border-b border-slate-800">
          <span className="font-extrabold text-2xl tracking-tighter text-white">
            FIT<span className="text-brand-neon">PRO</span> <span className="text-sm font-normal text-slate-500">ADMIN</span>
          </span>
        </div>

        <nav className="flex-1 py-4 px-3 flex flex-col gap-1">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link 
                key={item.name} 
                to={item.path}
                className={`flex items-center gap-3 px-3 py-3 rounded-lg font-medium transition-all ${
                  isActive 
                    ? 'bg-brand-neon text-black' 
                    : 'text-slate-400 hover:bg-slate-800 hover:text-white'
                }`}
              >
                {item.icon}
                {item.name}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-slate-800">
          <button className="flex items-center gap-3 text-red-500 hover:text-red-400 px-3 py-2 w-full font-medium transition-colors">
            <LogOut size={20} />
            Sair
          </button>
        </div>
      </aside>

      {/* Conteúdo Principal (Onde as páginas vão renderizar) */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* Header Superior do Admin */}
        <header className="h-16 bg-surface border-b border-slate-800 flex items-center justify-end px-8">
          <div className="flex items-center gap-3">
            <img src="https://ui-avatars.com/api/?name=Lucas+Admin&background=22C55E&color=000" alt="Admin" className="w-8 h-8 rounded-full" />
            <span className="text-sm font-medium">Lucas (Admin)</span>
          </div>
        </header>

        {/* Área de rolagem da página */}
        <div className="flex-1 overflow-auto p-8 bg-slate-900/50">
          {children}
        </div>
      </main>
    </div>
  );
}