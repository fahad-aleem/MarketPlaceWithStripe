import create from "zustand";
import { persist, devtools } from "zustand/middleware";

export const useSelector = create(
  devtools(
    persist(
      (set, get) => ({
        auth: {
          isAuthenticated: false,
          user: null,
        },
        setAuth: (user) =>
          set(() => ({
            auth: {
              isAuthenticated: true,
              user,
            },
          })),
        setLogout: () =>
          set(() => ({
            auth: {
              isAuthenticated: false,
              user: null,
            },
          })),
      }),
      {
        name: "market-place", // unique name
        getStorage: () => sessionStorage, // (optional) by default, 'localStorage' is used
      }
    )
  )
);
