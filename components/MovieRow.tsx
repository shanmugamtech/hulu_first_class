'use client'
import Link from 'next/link'
import Image from 'next/image'
import type { Movie } from '../types/movie'

export default function MovieRow({ movies, categoryTitle }: { movies: Movie[], categoryTitle: string }) {
  return (
    <section>
      <h3 className="text-lg font-semibold mb-3">{categoryTitle}</h3>
      <div className="flex gap-3 overflow-x-auto py-2 pb-6">
        {movies.map(m => (
          <Link key={m.id} href={`/movie/${m.id}`} className="min-w-[150px] block">
            <div className="h-[225px] w-[150px] relative rounded-md overflow-hidden">
              {m.poster_path && (
                <Image
                  src={`https://image.tmdb.org/t/p/w342${m.poster_path}`}
                  alt={m.title}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              )}
            </div>
            <p className="text-sm mt-2">{m.title}</p>
          </Link>
        ))}
      </div>
    </section>
  )
}
