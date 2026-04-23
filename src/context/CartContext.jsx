import React, { createContext, useContext, useMemo, useState } from "react";
import { getCategoryName } from "../data/products.js";

const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const addItem = (product) => {
    const cartProduct = {
      id: product.id,
      name: product.name,
      category: product.category || getCategoryName(product.categoryId)
    };

    setItems((prev) => {
      const existing = prev.find((item) => item.id === cartProduct.id);
      if (existing) {
        return prev.map((item) =>
          item.id === cartProduct.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { ...cartProduct, qty: 1 }];
    });
    setIsOpen(true);
  };

  const removeItem = (id) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const updateQty = (id, qty) => {
    if (qty <= 0) {
      removeItem(id);
      return;
    }
    setItems((prev) => prev.map((item) => (item.id === id ? { ...item, qty } : item)));
  };

  const clearCart = () => setItems([]);
  const toggleCart = () => setIsOpen((prev) => !prev);
  const closeCart = () => setIsOpen(false);

  const totals = useMemo(() => {
    const count = items.reduce((acc, item) => acc + item.qty, 0);
    return { count };
  }, [items]);

  const value = {
    items,
    isOpen,
    totals,
    addItem,
    removeItem,
    updateQty,
    clearCart,
    toggleCart,
    closeCart
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within CartProvider");
  }
  return context;
};
