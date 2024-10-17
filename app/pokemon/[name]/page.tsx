import { getPokemonName } from '@/utils/pokemon'
import { PokemonDetail } from '@/components/PokemonDetail'

export async function generateMetadata(props: { params: Promise<{ name: string }> }) {
  const params = await props.params;
  const { name } = params
  return {
    title: `PokéNext - ${getPokemonName(name)}`,
    description: 'Pokémon app developed with Next.js',
  }
}

export async function generateStaticParams() {
  return [
    { name: 'pikachu' },
    { name: 'charmander' },
    { name: 'squirtle' },
    { name: 'bulbasaur' },
  ]
}

export default async function Pokemon(
  props: {
    params: Promise<{ name: string }>
  }
) {
  const params = await props.params;
  const { name } = params

  return <PokemonDetail name={name} />
}
