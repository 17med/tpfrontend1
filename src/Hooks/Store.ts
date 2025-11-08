import { create } from "zustand";
interface StoreState {
  theme: "dark" | "light";
  fav:number[]
}
interface StoreActions {
  ToggleEvent: () => void;
  SetFav:(newfav:number[])=>void;
}
const useStore = create<StoreState & StoreActions>((set) => ({
  theme: (localStorage.theme as "dark" | "light") || "dark",
  fav:
  ToggleEvent: () =>
    set((state) => {
      const newTheme = state.theme === "dark" ? "light" : "dark";
      localStorage.theme = newTheme;
      return { theme: newTheme };
    }),
}));
export default useTheme;
