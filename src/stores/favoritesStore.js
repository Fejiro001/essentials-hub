import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useFavoritesStore = create(
  persist(
    (set, get) => ({
      favorites: [],

      // Add item to favorites
      addFavorite: (product) => {
        const exists = get().favorites.find((item) => item.id === product.id);

        if (exists) return;

        set({
          favorites: [...get().favorites, product]
        });
      },

      // Remove item
      removeFavorite: (id) => {
        set({
          favorites: get().favorites.filter((item) => item.id !== id)
        });
      },

      isFavorite: (id) => get().favorites.some((item) => item.id === id),

      // Toggle
      toggleFavorite: (product) => {
        const exists = get().favorites.find((item) => item.id === product.id);

        if (exists) {
          set({
            favorites: get().favorites.filter((item) => item.id !== product.id)
          });
        } else {
          set({
            favorites: [...get().favorites, product]
          });
        }
      },

      // Clear all
      clearFavorites: () => set({ favorites: [] })
    }),
    {
      name: "favorites"
    }
  )
);
