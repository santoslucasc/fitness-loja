import React, { createContext, useContext, useState } from 'react';

// 1. Criação do Contexto
const CartContext = createContext();

// 2. Provedor do Contexto (O que vai "abraçar" o nosso site)
export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [lastAddedItem, setLastAddedItem] = useState(null);

  // Função para Adicionar ao Carrinho
  const addToCart = (product, flavor = "Padrão") => {
    setCartItems((prevItems) => {
      // Verifica se o produto com o mesmo sabor já existe no carrinho
      const existingItem = prevItems.find(item => item.id === product.id && item.flavor === flavor);

      if (existingItem) {
        // Se já existe, aumenta a quantidade
        return prevItems.map(item =>
          item.id === product.id && item.flavor === flavor
            ? { ...item, qtd: item.qtd + 1 }
            : item
        );
      }

      // Se não existe, adiciona como novo item
      return [...prevItems, { ...product, qtd: 1, flavor }];
    });

    // Atualiza o último item adicionado para mostrar notificação
    setLastAddedItem({ ...product, flavor });
  };

  // Função para Remover do Carrinho
  const removeFromCart = (productId, flavor) => {
    setCartItems((prevItems) =>
      prevItems.filter(item => !(item.id === productId && item.flavor === flavor))
    );
  };

  // Limpar notificação
  const clearLastAdded = () => {
    setLastAddedItem(null);
  };

  // Cálculo do Total
  const cartTotal = cartItems.reduce((acc, item) => acc + (item.price * item.qtd), 0);
  const cartCount = cartItems.reduce((acc, item) => acc + item.qtd, 0);

  return (
    <CartContext.Provider value={{
      cartItems,
      addToCart,
      removeFromCart,
      cartTotal,
      cartCount,
      lastAddedItem,
      clearLastAdded
    }}>
      {children}
    </CartContext.Provider>
  );
}

// 3. Hook Personalizado (Facilita o uso nos outros ficheiros)
export function useCart() {
  return useContext(CartContext);
}