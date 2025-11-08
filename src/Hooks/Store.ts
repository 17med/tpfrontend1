import { create } from "zustand";
interface StoreState {
  theme: "dark" | "light";
  fav: number[];
}
interface StoreActions {
  ToggleEvent: () => void;
  ToggleFavEvent: (newfav: number[]) => void;
}
const ls: string = localStorage.fav || "[]";
const useStore = create<StoreState & StoreActions>((set) => ({
  theme: (localStorage.theme as "dark" | "light") || "light",
  fav: JSON.parse(ls),
  ToggleEvent: () =>
    set((state) => {
      const newTheme = state.theme === "dark" ? "light" : "dark";
      localStorage.theme = newTheme;
      return { theme: newTheme };
    }),
  ToggleFavEvent: (newfav: number[]) =>
    set(() => {
      localStorage.fav = JSON.stringify(newfav);
      return { fav: newfav };
    }),
}));
export default useStore;
