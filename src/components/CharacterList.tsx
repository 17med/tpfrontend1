import CharacterCard from "./CharacterCard";
import type { charactertype } from "./CharacterCard";
import Navbar from "./NavBar";
function CharacterList({
  characters,
  inc,
  dec,
  page,
  setname,
  max,
}: {
  characters: charactertype[];
  dec: () => void;
  inc: () => void;
  page: number;
  setname: (arg0: string) => void;
  max: boolean;
}) {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <Navbar
          page={page}
          dec={dec}
          inc={inc}
          setname={setname}
          max={max}
          search={true}
        />
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {characters.map((characterimp: charactertype) => (
            <CharacterCard key={characterimp.id} character={characterimp} />
          ))}
        </div>
        <br />
        {!max ? (
          <Navbar
            page={page}
            dec={dec}
            inc={inc}
            setname={setname}
            max={max}
            search={false}
          />
        ) : null}
      </div>
    </div>
  );
}

export default CharacterList;
