import useStore from "../Hooks/Store";
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";
export default function ButtonTheme() {
  const { theme, ToggleEvent } = useStore();
  return (
    <div className="flex justify-end ">
      <button onClick={ToggleEvent} className="mt-10 mr-7">
        {theme == "dark" ? (
          <MdDarkMode size={40} color="white" />
        ) : (
          <CiLight size={40} />
        )}
      </button>
    </div>
  );
}
