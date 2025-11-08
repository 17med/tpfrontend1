export interface charactertype {
  id: number;
  name: string;
  status: string;
  species: string;
  image: string;
  url: string;
}

import { FcLike } from "react-icons/fc";
import useStore from "../Hooks/Store";
import { FcLikePlaceholder } from "react-icons/fc";
export default function CharacterCard({
  character,
}: {
  character: charactertype;
}) {
  const { fav, ToggleFavEvent } = useStore();

  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
      <img
        className="rounded-t-lg"
        src={character.image}
        alt={character.name}
      />

      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {character.name}
          {fav.includes(character.id) ? (
            <FcLike
              className="inline mb-1 ml-2 hover:scale-130"
              onClick={() => {
                ToggleFavEvent(fav.filter((x) => x != character.id));
              }}
            />
          ) : (
            <FcLikePlaceholder
              onClick={() => {
                const s = [...fav];
                s.push(character.id);
                ToggleFavEvent(s);
              }}
              className="inline mb-1 ml-2 hover:scale-130"
            />
          )}
        </h5>

        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {character.status == "Alive" ? (
            <span className="text-green-600">{character.status}</span>
          ) : null}{" "}
          {character.status == "Dead" ? (
            <span className="text-red-600">{character.status}</span>
          ) : null}
          {character.status == "unknown" ? (
            <span className="text-orange-400">{character.status}</span>
          ) : null}
          - {character.species}{" "}
        </p>
      </div>
    </div>
  );
}
