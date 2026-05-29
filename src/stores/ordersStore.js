import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useOrdersStore = create(
  persist(
    (set) => ({
      orders: [],

      addOrder: (order) =>
        set((state) => ({
          orders: [order, ...state.orders]
        }))
    }),
    {
      name: "orders"
    }
  )
);
