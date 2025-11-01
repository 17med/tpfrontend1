import { createContext } from "react";
interface favContextInterface {
  fav: number[];
  ToggleFavEvent: (st: number[]) => void;
}
const FavContext = createContext<favContextInterface>({
  fav: [],
  ToggleFavEvent: (st: number[]) => {
    console.warn(
      st,
      "ToggleEvent not implemented. Use FavProvider to provide actual implementation."
    );
  },
});
// eslint-disable-next-line react-refresh/only-export-components
export { type favContextInterface };
export default FavContext;
