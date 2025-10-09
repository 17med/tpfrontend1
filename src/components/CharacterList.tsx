import CharacterCard from "./CharacterCard";
import type { charactertype } from "./CharacterCard";
function CharacterList({
  characters,
  inc,
  dec,
  page,
}: {
  characters: charactertype[];
  dec: () => void;
  inc: () => void;
  page: number;
}) {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 w-full text-center">
          {" "}
          Personnages de Rick and Morty{" "}
        </h2>
        <div className="flex justify-between items-center p-4">
          {page > 1 ? (
            <button
              onClick={dec}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Back
            </button>
          ) : (
            <div className="bg-white hover:bg-white text-white font-bold py-2 px-4 rounded"></div>
          )}
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={inc}
          >
            Next
          </button>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {characters.map((characterimp: charactertype) => (
            <CharacterCard key={characterimp.id} character={characterimp} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CharacterList;
