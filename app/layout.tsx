import './globals.css'
import Header from '../components/Header'

export const metadata = {
  title: 'Streaming Dashboard',
  description: 'Mini Netflix/Hulu clone — Next.js 14 + TypeScript + Tailwind'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="max-w-7xl mx-auto px-4 py-6">
          {children}
        </main>
      </body>
    </html>
  )
}
