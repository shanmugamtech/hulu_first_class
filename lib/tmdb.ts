const BASE = 'https://api.themoviedb.org/3'
const KEY = process.env.TMDB_API_KEY

async function getJson(path: string) {
  const res = await fetch(`${BASE}${path}?api_key=${KEY}`, { next: { revalidate: 60 } })
  if (!res.ok) throw new Error('TMDB fetch failed: ' + res.status)
  return res.json()
}

export async function fetchPopular() {
  return getJson('/movie/popular')
}
export async function fetchNowPlaying() {
  return getJson('/movie/now_playing')
}
export async function fetchTopRated() {
  return getJson('/movie/top_rated')
}
export async function fetchMovieById(id: string) {
  const res = await fetch(`${BASE}/movie/${id}?api_key=${KEY}`)
  if (!res.ok) throw new Error('Failed to fetch movie')
  return res.json()
}
