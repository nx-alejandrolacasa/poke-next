import { Pokemon, getPokemonImage } from "@/utils/pokemon"

type PokemonTileProps = {
  loading?: boolean
  pokemon: Pokemon
}

export function PokemonTile({ loading = false, pokemon }: PokemonTileProps) {
  return (
    <div className="rounded-xl border border-white p-4 text-center shadow-lg hover:border-slate-500">
      <a href={`/pokemon/${pokemon.name}`} title={pokemon.name}>
        <span className="mb-4 block overflow-hidden text-ellipsis whitespace-nowrap text-xl font-bold capitalize">
          {pokemon.name.replaceAll('-', ' ')}
        </span>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="aspect-square"
          src={loading ? '/loading.svg' : getPokemonImage(pokemon)}
          alt={`${pokemon.name} official artwork`}
        />
      </a>
    </div>
  )
}
