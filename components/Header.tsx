import Image from 'next/image'
import Link from 'next/link'

export function Header() {
  return (
    <header className="flex h-20 items-center justify-center">
      <nav className="flex w-full max-w-5xl items-center justify-between gap-4 px-6">
        <Link href="/" title="Go home">
          <Image
            alt="Pokemon"
            className="h-16"
            height={64}
            src="/pokemon-logo.svg"
            width={175}
          />
        </Link>
        <Link className="text-xl font-bold hover:underline" href="/pokedex">
          Pokédex
        </Link>
      </nav>
    </header>
  )
}
