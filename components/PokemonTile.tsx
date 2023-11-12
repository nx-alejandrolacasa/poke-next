import { getPokemonImage, Pokemon } from '@/utils/pokemon'
import Link from 'next/link'
import Image from 'next/image'

type PokemonTileProps = {
  loading?: boolean
  pokemon: Pokemon
}

export function PokemonTile({ loading = false, pokemon }: PokemonTileProps) {
  return (
    <div className="aspect-[5/6] overflow-hidden rounded-xl border-4 border-slate-200 bg-slate-100 text-center shadow-lg hover:border-slate-500">
      <Link href={`/pokemon/${pokemon.name}`} title={pokemon.name}>
        <Image
          alt={`${pokemon.name} official artwork`}
          className="aspect-square p-4"
          height={475}
          src={loading ? '/loading.svg' : getPokemonImage(pokemon)}
          width={475}
        />
        <span className="block truncate bg-slate-200 py-5 text-xl font-bold capitalize">
          {pokemon.name.replaceAll('-', ' ')}
        </span>
      </Link>
    </div>
  )
}
