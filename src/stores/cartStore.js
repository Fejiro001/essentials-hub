import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useCartStore = create(
  persist(
    (set, get) => ({
      cart: [],
      addItem: () => ({}),
      removeItem: () => ({}),
      updateQuantityt: () => ({}),
      clearCart: () => ({})
    }),
    { name: "cart" }
  )
);
