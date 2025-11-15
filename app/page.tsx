import HeroBanner from '../components/HeroBanner'
import MovieRow from '../components/MovieRow'
import { fetchPopular, fetchNowPlaying, fetchTopRated } from '../lib/tmdb'
import type { Movie } from '../types/movie'

export default async function Home() {
  const [popularRes, nowRes, topRes] = await Promise.all([
    fetchPopular(),
    fetchNowPlaying(),
    fetchTopRated()
  ])

  const popular: Movie[] = popularRes.results ?? []
  const nowPlaying: Movie[] = nowRes.results ?? []
  const topRated: Movie[] = topRes.results ?? []

  return (
    <>
      {popular[0] && <HeroBanner movie={popular[0]} />}
      <section className="space-y-8 mt-8">
        <MovieRow movies={popular} categoryTitle="Popular" />
        <MovieRow movies={nowPlaying} categoryTitle="Now Playing" />
        <MovieRow movies={topRated} categoryTitle="Top Rated" />
      </section>
    </>
  )
}
