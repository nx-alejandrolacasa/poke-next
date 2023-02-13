import { PokemonTile } from '@/components/PokemonTile'
import { fetchPokemonByName } from '@/utils/pokemon'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'PokéNext - Home',
  description: 'Pokémon app developed with Next.js',
}

export default async function Home() {
  const pokemons = await Promise.all([
    fetchPokemonByName('pikachu'),
    fetchPokemonByName('charmander'),
    fetchPokemonByName('squirtle'),
    fetchPokemonByName('bulbasaur'),
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
