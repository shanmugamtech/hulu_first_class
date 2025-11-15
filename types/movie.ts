export interface Movie {
  id: number;
  title: string;
  poster_path?: string | null;
  backdrop_path?: string | null;
  overview?: string;
  release_date?: string;
}

export interface MovieDetail extends Movie {
  genres?: { id: number; name: string }[];
  runtime?: number;
}
