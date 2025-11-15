import Image from 'next/image'
import type { Movie } from '../types/movie'

export default function HeroBanner({ movie }: { movie: Movie }) {
  return (
    <section className="relative h-72 md:h-96 rounded-lg overflow-hidden">
      {movie.backdrop_path && (
        <Image
          src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
          alt={movie.title}
          fill
          priority
          style={{ objectFit: 'cover' }}
        />
      )}
      <div className="absolute bottom-6 left-6 text-white drop-shadow">
        <h2 className="text-2xl md:text-4xl font-bold">{movie.title}</h2>
        <p className="max-w-xl mt-2 hidden md:block">{movie.overview}</p>
      </div>
    </section>
  )
}
