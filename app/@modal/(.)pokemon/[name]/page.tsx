import { getPokemonName } from '@/utils/pokemon'
import { PokemonDetail } from '@/components/PokemonDetail'
import { Modal } from '@/components/Modal'

export function generateMetadata({ params }: { params: { name: string } }) {
  const { name } = params
  return {
    title: `PokéNext - ${getPokemonName(name)}`,
    description: 'Pokémon app developed with Next.js',
  }
}

export default function Pokemon({ params }: { params: { name: string } }) {
  const { name } = params

  return (
    <Modal>
      <PokemonDetail name={name} />
    </Modal>
  )
}
