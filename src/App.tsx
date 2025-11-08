import { useState, useEffect, useReducer } from "react";
import CharacterList from "./components/CharacterList";
import axios from "axios";
import type { charactertype } from "./components/CharacterCard";
import "./App.css";

import ButtonTheme from "./components/ButtonTheme";

const initialState = { loading: true, error: null, characters: [] };
import useStore from "./Hooks/Store";
interface stateType {
  loading: boolean;
  error: string | null;
  characters: charactertype[];
}
interface actionType {
  payload?: charactertype[] | string;
  type: "FETCH_INIT" | "FETCH_SUCCESS" | "FETCH_FAILURE";
}

function fetchReducer(state: stateType, action: actionType) {
  switch (action.type) {
    case "FETCH_INIT":
      return { ...state, loading: true, error: null };
    case "FETCH_SUCCESS":
      return {
        ...state,
        loading: false,
        characters: action.payload as charactertype[],
        error: null,
      };
    case "FETCH_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload as string,
        characters: [],
      };
    default:
      throw new Error();
  }
}

export default function App() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [state, dispatch] = useReducer(fetchReducer, initialState);
  const [page, setpage] = useState(1);
  const [name, setname] = useState("");
  const [max, setmax] = useState(false);

  const { theme, ToggleEvent } = useStore();

  useEffect(() => {
    setpage(1);
  }, [name]);
  useEffect(() => {
    async function fetchCharacters() {
      axios
        .get(
          `https://rickandmortyapi.com/api/character?page=${page}&name=${name.replace(
            " ",
            "%20"
          )}`
        )
        .then((response) => {
          if (response.data.results.length < 20) {
            setmax(true);
          } else {
            setmax(false);
          }
          console.log(response.data.results);
          dispatch({
            type: "FETCH_SUCCESS",
            payload: response.data.results,
          });
          setLoading(false);
        })
        .catch((error) => {
          if (error.status == 404) {
            setmax(true);
            dispatch({
              type: "FETCH_SUCCESS",
              payload: [],
            }); //setresult
          } else {
            setError(error.message);
          }

          setLoading(false);
        });
    }
    fetchCharacters()
      .then(() => {})
      .catch(() => {});
  }, [page, name]);
  useEffect(() => {
    document.documentElement.classList.toggle(
      "dark",
      localStorage.theme === "dark" ||
        (!("theme" in localStorage) &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
    );
  }, [theme]);

  return (
    <div className={`App dark:bg-gray-700 bg-white ${theme} w-full h-screen`}>
      <ButtonTheme />
      {loading && (
        <div role="status">
          <svg
            aria-hidden="true"
            className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
      )}
      {error && (
        <p
          style={{ color: "red " }}
          className="flex justify-center items-center mt-4 text-xl font-bold border-2 border-red-500 w-1/2 mx-auto p-4 rounded-4xl dark:bg-amber-50 dark:border-gray-600"
        >
          {" "}
          Erreur : {error}{" "}
        </p>
      )}
      {!loading && !error && (
        <CharacterList
          characters={state.characters}
          inc={() => setpage(page + 1)}
          dec={() => {
            setpage(page - 1);
          }}
          max={max}
          setname={setname}
          page={page}
        />
      )}
    </div>
  );
}
