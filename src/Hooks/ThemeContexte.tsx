import { createContext } from "react";
interface themeContextInterface {
  theme: string;
  ToggleEvent: () => void;
}
const ThemeContext = createContext<themeContextInterface>({
  theme: "dark",
  ToggleEvent: () => {
   
    
  },
});
// eslint-disable-next-line react-refresh/only-export-components
export { type themeContextInterface };
export default ThemeContext;


