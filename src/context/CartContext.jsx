import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const saved = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('cart') || 'null') : null;
  const [itens, setItems] = useState(() => saved || []);
  const [pedidos, setPedidos] = useState([]);

  useEffect(() => {
      localStorage.setItem('cart', JSON.stringify(itens));
  }, [itens]);

  const ItensTotais = useCallback(
    () => itens.reduce((sum, item) => sum + (item.quantity || 0), 0),
    [itens]
  );

  const precototal = useCallback(
    () => itens.reduce((sum, item) => sum + (item.price || 0) * (item.quantity || 0), 0),
    [itens]
  );

  const adicionaraoCarrinho = (product) => {
    setItems((currentItems) => {
      const ItemExistente = currentItems.find((item) => item.id === product.id);
      if (ItemExistente) {
        return currentItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: (item.quantity || 0) + 1 }
            : item
        );
      }
      return [...currentItems, { ...product, quantity: 1 }];
    });
  };

  const removerdoCarrinho = (id) => {
    setItems((currentItems) =>
      currentItems
        .map((item) =>
          item.id === id ? { ...item, quantity: (item.quantity || 0) - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const LimparCarrinho = () => {
    setItems([]);
  };

  const finalizarPedido = () => {
    if (itens.length === 0) return null;
    const order = {
      id: Date.now(),
      date: new Date().toLocaleDateString('pt-BR'),
      items: itens,
      total: precototal(),
    };
    setPedidos((prev) => [...prev, order]);
    setItems([]);
    return order;
  };

  const SelecionarQuantidade = (id, quantity) => {
    setItems((currentItems) =>
      currentItems
        .map((item) =>
          item.id === id ? { ...item, quantity: Math.max(0, quantity) } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  return (
    <CartContext.Provider
      value={{
        itens,
        pedidos,
        ItensTotais,
        getTotalItems: ItensTotais,
        precototal,
        adicionaraoCarrinho,
        addToCart: adicionaraoCarrinho,
        removerdoCarrinho,
        LimparCarrinho,
        SelecionarQuantidade,
        finalizarPedido,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart deve ser usado dentro de CartProvider');
  }
  return context;
}
