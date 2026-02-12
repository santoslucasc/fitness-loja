import React from 'react';
// 1. MUDANÇA AQUI: Trocamos BrowserRouter por HashRouter
import { HashRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './contexts/CartContext';

// ==========================================
// IMPORTAÇÕES DO CLIENTE (LOJA)
// ==========================================
import Layout from './components/layout/Layout';
import Home from './pages/store/Home';
import ProductDetail from './pages/store/ProductDetail';
import Checkout from './pages/store/Checkout';

// ==========================================
// IMPORTAÇÕES DO ADMINISTRADOR (PAINEL)
// ==========================================
import AdminLayout from './components/layout/AdminLayout';
import ProductList from './pages/admin/ProductList';
import ProductForm from './pages/admin/ProductForm';

import { UserProvider } from './contexts/UserContext';
import UserProfile from './pages/store/UserProfile';

export default function App() {
  return (
    // 2. MUDANÇA AQUI: A tag agora é HashRouter em vez de BrowserRouter
    <HashRouter>
      {/* O CartProvider envolve tudo para que o carrinho funcione no site */}
      <UserProvider>
        <CartProvider>
          <Routes>

            {/* ------------------------------------------------------------------
                ROTAS DO CLIENTE (Usam o Layout com Navbar e Carrinho)
            ------------------------------------------------------------------- */}
            <Route
              path="/"
              element={
                <Layout>
                  <Home />
                </Layout>
              }
            />
            <Route
              path="/produto/:id"
              element={
                <Layout>
                  <ProductDetail />
                </Layout>
              }
            />
            <Route
              path="/minha-conta"
              element={
                <Layout>
                  <UserProfile />
                </Layout>
              }
            />
            <Route
              path="/checkout"
              element={
                <Layout>
                  <Checkout />
                </Layout>
              }
            />

            {/* ------------------------------------------------------------------
                ROTAS DO ADMINISTRADOR (Usam o Layout com Menu Lateral)
            ------------------------------------------------------------------- */}
            <Route
              path="/admin"
              element={
                <AdminLayout>
                  <div className="text-white text-3xl font-bold mb-4">Dashboard Geral</div>
                  <p className="text-slate-400">Bem-vindo ao painel de controle da sua loja Fitness.</p>
                </AdminLayout>
              }
            />
            <Route
              path="/admin/produtos"
              element={
                <AdminLayout>
                  <ProductList />
                </AdminLayout>
              }
            />
            <Route
              path="/admin/produtos/novo"
              element={
                <AdminLayout>
                  <ProductForm />
                </AdminLayout>
              }
            />
          </Routes>
        </CartProvider>
      </UserProvider>
    </HashRouter>
  );
}