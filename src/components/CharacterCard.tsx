export interface charactertype {
  id: number;
  name: string;
  status: string;
  species: string;
  image: string;
  url: string;
}

/*

*/
export default function CharacterCard({
  character,
}: {
  character: charactertype;
}) {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
      <a
        href={`https://www.google.com/search?q=Rick+and+Morty+${character.name}+wiki`}
      >
        <img
          className="rounded-t-lg"
          src={character.image}
          alt={character.name}
        />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {character.name}
          </h5>
        </a>
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
