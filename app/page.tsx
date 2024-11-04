import { Metadata } from 'next'
import { PokemonTile } from '@/components/PokemonTile'
import { fetchPokemonByName } from '@/utils/pokemon'

export const metadata: Metadata = {
  title: 'PokéNext - Home',
  description: 'Pokémon app developed with Next.js',
}

export default async function Home() {
  const pokemons = await Promise.all([
    fetchPokemonByName('pikachu', { cache: 'force-cache' }),
    fetchPokemonByName('charmander', { cache: 'force-cache' }),
    fetchPokemonByName('squirtle', { cache: 'force-cache' }),
    fetchPokemonByName('bulbasaur', { cache: 'force-cache' }),
  ])

  return (
    <ul className="grid grid-cols-2 gap-4">
      {pokemons.filter(Boolean).map((pokemon) => (
        <li className="list-none" key={pokemon.name}>
          <PokemonTile pokemon={pokemon} />
        </li>
      ))}
    </ul>
  )
}
