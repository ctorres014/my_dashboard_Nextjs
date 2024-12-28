import { SimplePokemons } from "../interfaces/simple-pokemons"
import PokemonsCard from './PokemonsCard';

export type Props = {
    pokemons: SimplePokemons[];
}

export const PokemonsGrid = ({ pokemons }:Props) => {
  return (
    <>
        {
          pokemons.map(pokemon =>  
            <PokemonsCard pokemon={pokemon} key={pokemon.uid}></PokemonsCard>
          )
        }
    </>
  )
}

export default PokemonsGrid
