import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useCartStore = create(
  persist(
    (set, get) => ({
      cart: [],

      addItem: (product, quantity = 1) => {
        const cart = get().cart;
        const productExists = cart.find((item) => item.id === product.id);

        if (productExists) {
          const updatedCart = cart.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + quantity }
              : item
          );

          set({ cart: updatedCart });
        } else {
          set({ cart: [...cart, { ...product, quantity }] });
        }
      },

      removeItem: (id) => {
        const updatedCart = get().cart.filter((item) => item.id !== id);
        set({ cart: updatedCart });
      },

      updateQuantity: (id, quantity) => {
        if (quantity <= 0) {
          get().removeItem(id);
          return;
        }

        const updatedCart = get().cart.map((item) =>
          item.id === id ? { ...item, quantity } : item
        );

        set({ cart: updatedCart });
      },

      clearCart: () => set({ cart: [] })
    }),
    { name: "cart" }
  )
);
