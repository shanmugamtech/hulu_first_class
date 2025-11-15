import Image from 'next/image'
import { fetchMovieById } from '../../../lib/tmdb'
import type { MovieDetail } from '../../../types/movie'

export default async function MoviePage({ params }: { params: { id: string } }) {
  const data: MovieDetail = await fetchMovieById(params.id)

  return (
    <div className="max-w-5xl mx-auto">
      <div className="md:flex gap-6">
        <div className="md:w-1/3 relative h-96">
          {data.poster_path && (
            <Image
              src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
              alt={data.title}
              fill
              style={{ objectFit: 'cover' }}
            />
          )}
        </div>
        <div className="md:flex-1 mt-4 md:mt-0">
          <h1 className="text-2xl font-bold">{data.title}</h1>
          <p className="text-sm text-gray-500">{data.release_date} • {data.runtime} min</p>
          <div className="mt-4">
            <p>{data.overview}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
