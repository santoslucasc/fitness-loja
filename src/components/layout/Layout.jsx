import React, { useState } from 'react';
import Navbar from './Navbar';
import CartDrawer from './CartDrawer';
import Footer from './Footer';
import CartNotification from '../ui/CartNotification';
import { useCart } from '../../contexts/CartContext';

export default function Layout({ children }) {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { lastAddedItem, clearLastAdded } = useCart();

  return (
    <div className="min-h-screen bg-background text-text-primary flex flex-col">
      <Navbar
        onOpenCart={() => setIsCartOpen(true)}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      {/* Onde a página (Home, Produto) vai aparecer */}
      <main className="flex-1">
        {React.cloneElement(children, { searchQuery })}
      </main>

      <Footer />
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />

      {/* Cart Notification */}
      {lastAddedItem && (
        <CartNotification item={lastAddedItem} onClose={clearLastAdded} />
      )}
    </div>
  );
}
