
import { PokemonsGrid, PokemonsResponse, SimplePokemons } from '@/pokemons';

export const metadata = {
    title: 'Favoritos',
    description: 'Ad minin sit cupidatat culpa consectetur'
}

export default async function PokemosPage() {
    
  return (
    <div className="p-2 flex flex-col">
        <span className='text-5xl my-2'>Listado de Favoritos</span> <small className='text-blue-500'>Global State</small>
        <div className="flex flex-wrap gap-10 items-center justify-center">
            <PokemonsGrid pokemons={ [] }></PokemonsGrid>
        </div>
      {/* <h1>{JSON.stringify(pokemons)}</h1> */}
    </div>
  );
}