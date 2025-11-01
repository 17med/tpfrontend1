import { useContext } from "react";
import ThemeContext from "../Hooks/ThemeContexte";
export default function Navbar({
  page,
  dec,
  inc,
  setname,
  max,
  search,
}: {
  page: number;
  dec: () => void;
  inc: () => void;
  setname: (arg0: string) => void;
  max: boolean;
  search: boolean;
}) {
  const { theme } = useContext(ThemeContext);
  console.log("Current theme in NavBar:", theme);
  return (
    <>
      {search ? (
        <h2 className="dark:text-white text-2xl font-bold tracking-tight text-gray-900 w-full text-center mb-4">
          Personnages de Rick and Morty
        </h2>
      ) : null}
      <div className="flex flex-col items-center space-y-4 mb-6">
        {search ? (
          <div className="w-full max-w-md">
            <input
              onChange={(e) => setname(e.target.value)}
              type="text"
              placeholder="Rechercher un personnage..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white"
            />
          </div>
        ) : null}

        <div className="flex justify-between items-center w-full max-w-md">
          {page > 1 ? (
            <button
              onClick={dec}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out"
            >
              Back
            </button>
          ) : (
            <div className="bg-gray-300 text-white font-bold py-2 px-4 rounded cursor-not-allowed">
              Back
            </div>
          )}

          <button
            disabled={max}
            onClick={inc}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold disabled:bg-gray-300  py-2 px-4 rounded transition duration-300 ease-in-out"
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}
