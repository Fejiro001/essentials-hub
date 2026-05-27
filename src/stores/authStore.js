import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useAuthStore = create(
  persist(
    (set, get) => ({
      user: null,
      isAuthenticated: false,
      users: [],
      signup: (newUser) => {
        const users = get().users;
        const userExists = users.find((u) => u.email === newUser.email);

        if (userExists) return { error: "User already exists" };

        const updatedUsers = [...users, newUser];

        set({
          users: updatedUsers,
          user: newUser,
          isAuthenticated: true
        });
      },
      login: (email, password) => {
        const users = get().users;
        const foundUser = users.find(
          (u) => u.email === email && u.password === password
        );
        if (!foundUser) return { error: "Invalid credentials" };

        set({ user: foundUser, isAuthenticated: true });
      },
      logout: () => set({ user: null, isAuthenticated: false })
    }),
    { name: "auth" }
  )
);
