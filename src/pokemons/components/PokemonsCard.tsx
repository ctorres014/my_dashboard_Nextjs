import Link from "next/link";
import { SimplePokemons } from "../interfaces/simple-pokemons";
import Image from "next/image";
import { IoHeartOutline } from "react-icons/io5";


export type Props = {
    pokemon: SimplePokemons
}

const PokemonsCard = ({ pokemon }: Props) => {
  return (
    <div className="mx-auto right-0 mt-2 w-60">
      <div className="bg-white rounded overflow-hidden shadow-lg">
        <div className="flex flex-col items-center justify-center text-center p-6 bg-gray-800 border-b ">
            <Image src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.uid}.svg`}
                key={pokemon.uid}
                width={100}
                height={100}
                alt={pokemon.name}
                priority={false}>
            </Image>
          <p className="pt-2 text-lg font-semibold text-gray-50 capitalize">{pokemon.name}</p>
          {/* <p className="text-sm text-gray-100">John@Doe.com</p> */}
          <div className="mt-5">
            <a className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100">
              More Information
            </a>
          </div>
        </div>
        <div className="border-b">
          <Link href={`/dashboard/pokemon/${pokemon.uid}`} className="px-4 py-2 hover:bg-gray-100 flex">
              <div className="text-red-600 flex items-center">
                <IoHeartOutline></IoHeartOutline>
              </div>
              <div className="pl-3">
                <p className="text-sm font-medium text-gray-800 leading-none">
                  No is favorite
                </p>
                <p className="text-xs text-gray-500">View your campaigns</p>
              </div>
          </Link>
         
        </div>

      </div>
    </div>
  );
}

export default PokemonsCard
