
import { PokemonsGrid, PokemonsResponse, SimplePokemons } from '@/pokemons';
import { notFound } from 'next/navigation';


const getPokemons = async (limit = 20, offset = 0): Promise<SimplePokemons[]> => {
    const data: PokemonsResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
            .then(res => res.json());
    
    const pokemons = data.results.map( (pokemon) => ({
        uid: pokemon.url.split('/').at(-2)!,
        name: pokemon.name
    }))
    //  throw new Error('Este es un error ocasionado');
    // throw notFound();
    return pokemons;
}

export default async function PokemosPage() {
    const pokemons = await getPokemons(100);
    
  return (
    <div className="p-2 flex flex-col">
        <span className='text-5xl my-2'>Listado de Pókemons</span>
        <div className="flex flex-wrap gap-10 items-center justify-center">
            <PokemonsGrid pokemons={pokemons}></PokemonsGrid>
        </div>
      {/* <h1>{JSON.stringify(pokemons)}</h1> */}
    </div>
  );
}