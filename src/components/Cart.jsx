import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "../context/CartContext.jsx";

const Cart = () => {
  const { isOpen, closeCart, items, updateQty, removeItem, clearCart } = useCart();

  const buildWhatsAppMessage = () => {
    const productList = items
      .map((item) => `- ${item.name} | Category: ${item.category} | Quantity: ${item.qty}`)
      .join("\n");

    const rawMessage =
      `Hello Al-Medina Hardware,\n\n` +
      `I would like to order the following items:\n\n` +
      `${productList || "- (No items selected)"}\n\n` +
      `Name:\n` +
      `Phone:\n` +
      `Location:\n\n` +
      `Please prepare for pickup.`;

    return encodeURIComponent(rawMessage);
  };

  const handleCheckout = () => {
    const message = buildWhatsAppMessage();
    const url = `https://wa.me/254718670021?text=${message}`;
    window.open(url, "_blank");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex justify-end"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="absolute inset-0 bg-black/30" onClick={closeCart} />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 200, damping: 30 }}
            className="relative flex h-full w-full max-w-md flex-col bg-white p-6 shadow-xl"
          >
            <div className="flex items-center justify-between">
              <h3 className="font-heading text-xl font-semibold text-brand-ink">Cart</h3>
              <button onClick={closeCart} className="text-sm font-semibold text-brand-slate">Close</button>
            </div>

            <div className="mt-6 flex-1 overflow-y-auto">
              {items.length === 0 ? (
                <p className="text-sm text-brand-slate">Your cart is currently empty.</p>
              ) : (
                <div className="grid gap-4">
                  {items.map((item) => (
                    <div key={item.id} className="rounded-2xl border border-blue-900/10 bg-blue-50/40 p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-semibold text-brand-ink">{item.name}</p>
                          <p className="text-xs text-brand-slate">{item.category}</p>
                        </div>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-xs font-semibold text-brand-orange"
                        >
                          Remove
                        </button>
                      </div>
                      <div className="mt-3 flex items-center gap-3">
                        <button
                          onClick={() => updateQty(item.id, item.qty - 1)}
                          className="h-8 w-8 rounded-full border border-brand-blue/20 bg-white text-brand-blue"
                        >
                          -
                        </button>
                        <span className="text-sm font-semibold">{item.qty}</span>
                        <button
                          onClick={() => updateQty(item.id, item.qty + 1)}
                          className="h-8 w-8 rounded-full border border-brand-blue/20 bg-white text-brand-blue"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="mt-6 grid gap-3">
              <button
                onClick={handleCheckout}
                disabled={items.length === 0}
                className="w-full rounded-full bg-brand-blue px-4 py-3 font-semibold text-white transition hover:bg-brand-ink disabled:opacity-50"
              >
                Checkout via WhatsApp
              </button>
              <button
                onClick={clearCart}
                className="w-full rounded-full border border-brand-blue/20 px-4 py-3 text-sm font-semibold text-brand-blue transition hover:bg-blue-50"
              >
                Clear Cart
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Cart;
