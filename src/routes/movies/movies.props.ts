export interface IMovieProps {
  id: number;
  title: string;
  release_date: string;
  runtime: number;
  mpaa_rating: string;
  description: string;
  image?: string;
  created_at?: string;
  updated_at?: string;
  genres?: { id: number; checked: boolean; genre: string }[] | [];
  genres_array?: any[];
}
