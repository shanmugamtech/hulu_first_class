'use client'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-black text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold">StreamLite</Link>
        <nav className="space-x-4">
          <Link href="/">Home</Link>
        </nav>
      </div>
    </header>
  )
}
