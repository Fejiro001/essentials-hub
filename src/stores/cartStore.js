import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useCartStore = create(
  persist((set, get) => ({}), { name: "cart" })
);
