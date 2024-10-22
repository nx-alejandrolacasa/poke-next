import { Inter } from 'next/font/google'
import { Header } from '@/components/Header'
import './globals.css'

const font = Inter({
  subsets: ['latin'],
  weight: '400',
})

export default function RootLayout(props: {
  children: React.ReactNode
  modal: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${font.className} flex min-h-screen flex-col justify-between`}
      >
        <Header />
        <main className="mx-auto w-full max-w-5xl flex-1 p-6">
          {props.children}
          {props.modal}
        </main>
        <footer className="w-full">
          <div className="mx-auto max-w-5xl p-6">
            Copyright &copy; nexum {new Date().getFullYear()}
          </div>
        </footer>
      </body>
    </html>
  )
}
